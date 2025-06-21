import crypto from 'crypto';

export function generateOtp(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from(crypto.randomFillSync(new Uint8Array(length)))
    .map((x) => chars[x % chars.length])
    .join('');
}

