import jwt from 'jsonwebtoken';

export default function verifyToken (token){
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return {success:true,decoded}
      } catch (err) {
        return {success:false,err}
      }
}