import { User, Thought } from "../models/index.js";
import { Request, Response } from "express";

// Get all thoughts
export const getAllThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json({ thoughts });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single thought by ID
export const getThoughtById = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) return res.status(404).json({ message: "No thought found" });
    res.json({ thought });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new thought
export const createThought = async (req: Request, res: Response) => {
  try {
    const newThought = await Thought.create(req.body);
    const user = await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { thoughts: newThought._id } },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ newThought, user });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a thought by ID
export const updateThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true }
    );
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    res.json({ thought });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a thought by ID
export const deleteThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) return res.status(404).json({ message: "No thought found" });
    res.json({ message: "Thought deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add a reaction to a thought
export const addReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { new: true }
    );
    if (!thought) return res.status(404).json({ message: "No thought found" });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Remove a reaction from a thought
export const removeReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) return res.status(404).json({ message: "No thought found" });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};