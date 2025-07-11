import Program, { IProgram } from '../models/Program';
import { Request, Response } from 'express';

export const createProgram = async (req: Request, res: Response) => {
  try {
    const { title, description, startDate, endDate, isActive } = req.body;
    if (!title || !description || !startDate) {
      return res.status(400).json({ message: 'Title, description, and start date are required.' });
    }
    const program = new Program({ title, description, startDate, endDate, isActive });
    await program.save();
    res.status(201).json({ message: 'Program created.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

export const getPrograms = async (req: Request, res: Response) => {
  try {
    const programs = await Program.find().sort({ startDate: -1 });
    res.status(200).json(programs);
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

export const updateProgram = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const program = await Program.findByIdAndUpdate(id, update, { new: true });
    if (!program) return res.status(404).json({ message: 'Program not found.' });
    res.status(200).json(program);
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

export const deleteProgram = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const program = await Program.findByIdAndDelete(id);
    if (!program) return res.status(404).json({ message: 'Program not found.' });
    res.status(200).json({ message: 'Program deleted.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};
