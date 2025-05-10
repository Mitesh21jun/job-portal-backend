import Candidate from '../models/Candidate.js';

export const createOrUpdateProfile = async (req, res) => {
  const userId = req.user.id;
  const { name, resumeText, skills } = req.body;

  try {
    const existing = await Candidate.findOne({ userId });

    if (existing) {
      existing.name = name;
      existing.resumeText = resumeText;
      existing.skills = skills;
      await existing.save();
      return res.status(200).json({ message: 'Profile updated', profile: existing });
    }
    const newProfile = new Candidate({ userId, name, resumeText, skills });
    await newProfile.save();
    res.status(201).json({ message: 'Profile created', profile: newProfile });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const candidate = await Candidate.findById({ userId: req.params.id });
    if (!candidate) return res.status(404).json({ message: 'Profile not found' });
    res.json(candidate);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
