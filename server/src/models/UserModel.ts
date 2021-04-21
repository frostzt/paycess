import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { Schema, Model, Document } from 'mongoose';

interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  accountType: string;
  verified: Boolean;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name of the user must be provided!'],
  },
  email: {
    type: String,
    required: [true, 'A user must have an associated email!'],
    unique: true,
    lowercase: true,
  },
  accountType: {
    type: String,
    enum: ['customer', 'retailer', 'administrator'],
    default: 'customer',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: [true, 'Provide a password!'],
  },
});
