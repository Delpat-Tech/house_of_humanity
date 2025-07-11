import Volunteer, { IVolunteer } from '../models/Volunteer';
import { Request, Response } from 'express';

export const createVolunteer = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, interests } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name, email, and phone are required.' });
    }
    const volunteer = new Volunteer({ name, email, phone, interests });
    await volunteer.save();
    res.status(201).json({ message: 'Volunteer registered. Thank you!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

export const getVolunteers = async (req: Request, res: Response) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.status(200).json(volunteers);
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};
