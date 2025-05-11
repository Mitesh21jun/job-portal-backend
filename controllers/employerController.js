import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  const userId = req.user.id;
  const { title, description, requirements, company, location, contact } = req.body;

  try {
    const newJob = new Job({
      userId,
      title,
      description,
      requirements,
      company,
      location,
      contact,
    });
    await newJob.save();
    res.status(201).json({ message: "Job created", job: newJob });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getEmployerJobs = async (req, res) => {
  const { userId } = req.params;

  try {
    const jobs = await Job.find({ userId });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateJob = async (req, res) => {
  const { jobId } = req.params;
  const { title, description, requirements, company, location, contact } = req.body;

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });
    if (job.userId.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    job.title = title;
    job.company = company;
    job.location = location;
    job.description = description;
    job.requirements = requirements;
    job.contact = contact;
    await job.save();

    res.json({ message: "Job updated", job });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteJob = async (req, res) => {
  const { jobId } = req.params;

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });
    if (job.userId.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await job.deleteOne();
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getJobDetails = async (req, res) => {
  const { jobId } = req.params;

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getJobById = async (req, res) => {
  const { jobId } = req.params;
  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
