import verifyToken from '../services/tokens/verifyToken.js';

export const authenticate = (req, res, next) => {
  try {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];
  const  {decoded} = verifyToken(token)
  console.log(decoded)
  if(!decoded)res.status(401).json({ message: 'Invalid or expired token' });
  
    req.user = decoded; // now available in route
    next();
    
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
