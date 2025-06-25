import mongoose, { Schema, Document, model, models } from 'mongoose'

const BusinessSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    website: {
      type: String
    },
    logoUrl: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const Business = mongoose.model('Business', BusinessSchema)
export default Business
