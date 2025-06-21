import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  expiresAt: Date,
}, {
  timestamps: true,
});

export const OTP = mongoose.model('OTP', otpSchema);
