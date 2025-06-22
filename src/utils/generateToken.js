import jwt from 'jsonwebtoken';

export default function generateToken(user) {
  return jwt.sign({...user},
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
  );
};
