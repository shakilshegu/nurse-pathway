import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const signToken = (id: string) =>
  jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, country } = req.body;
    const user = await User.create({ name, email, password, country });
    const token = signToken(String(user._id));
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ message: 'Invalid credentials' });
    const token = signToken(String(user._id));
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
