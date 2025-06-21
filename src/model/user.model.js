import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    role:{
      type:String,
      default: "Agent" 
    }
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);



const User = mongoose.model('User', userSchema);

export default User;
