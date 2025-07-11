import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 15,
    standardHeaders: true, // `RateLimit-*` headers
    legacyHeaders: false,  // Disable `X-RateLimit-*`
    handler: (req, res, next, options) => {
      res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.',
      });
    }
  });

export default limiter