import Candidate from "../models/Candidate.js";
import Job from "../models/Job.js";
import { getKeywordMatchScore } from "../utils/matcher.js";

// Match Candidates for a Job
export const matchCandidatesToJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const candidates = await Candidate.find();
    const matches = candidates
      .map((candidate) => {
        const score = getKeywordMatchScore(
          job.description,
          candidate.resumeText || ""
        );
          return { ...candidate.toObject(), ...score };
      })
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score);

    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Match Jobs for a Candidate
export const matchJobsToCandidate = async (req, res) => {
  try {
    const userId = req.params.userId
    const candidate = await Candidate.findOne({ userId });
    if (!candidate)
      return res.status(404).json({ message: "Candidate not found" });

    const jobs = await Job.find();
    const matches = jobs
      .map((job) => {
        const score = getKeywordMatchScore(
          candidate.resumeText || "",
          job.description
        );
        return { ...job.toObject(), ...score };
      })
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score);

    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
