import mongoose from 'mongoose';

const BusinessNameSchema = new mongoose.Schema({
  businessNames: {
    type: [String],
    required: true,
    validate: (v) => v.length === 2,
  },
  approvedName: {
    type: String, 
  },
  businessDescription: {
    type: String,
    required: true,
  },
  businessAddress: {
    type: String,
    required: true,
  },
  commencementDate: {
    type: Date,
    required: true,
  },
  owners: [
    {
      fullName: { type: String, required: true },
      dateOfBirth: { type: Date, required: true },
      gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
      nationality: { type: String, required: true },
      stateOfOrigin: { type: String, required: true },
      lga: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      residentialAddress: { type: String, required: true },
      meansOfID: {
        type: String,
        enum: ['NIN', 'Voter’s Card', 'Passport', 'Driver’s License'],
        required: true,
      },
      idNumber: { type: String, required: true },
      passportPhotoUrl: { type: String }, // Store image URL if uploaded
      signatureUrl: { type: String }, // Optional: digital signature image
    },
  ],
  status: {
    type: String,
    enum: ['draft', 'submitted', 'approved', 'rejected'],
    default: 'draft',
  },
}, { timestamps: true });

export default mongoose.model('BusinessNameRegistration', BusinessNameSchema);
