import mongoose from 'mongoose'

const BusinessSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true
    },
    website: {
      type: String,
      unique: true,
    },
    logoUrl: {
      type: String
    },
    approved:{
      type: Boolean,
      default:true,
    }
  },
  {
    timestamps: true
  }
)

const Business = mongoose.model('Business', BusinessSchema)
export default Business
