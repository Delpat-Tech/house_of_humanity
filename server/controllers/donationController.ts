import Donation, { IDonation } from '../models/Donation';
import { Request, Response } from 'express';

export const createDonation = async (req: Request, res: Response) => {
  try {
    const { donorName, donorEmail, amount, message } = req.body;
    if (!donorName || !donorEmail || !amount) {
      return res.status(400).json({ message: 'All fields except message are required.' });
    }
    const donation = new Donation({ donorName, donorEmail, amount, message });
    await donation.save();
    res.status(201).json({ message: 'Donation received. Thank you!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

export const getDonations = async (req: Request, res: Response) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};
