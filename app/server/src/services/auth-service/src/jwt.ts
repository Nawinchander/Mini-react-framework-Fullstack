import jwt from 'jsonwebtoken';

export function generateToken(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: '1h'
  });
}


// Advanced Security
// OAuth2
// OpenID Connect
// Refresh tokens
// CSRF protection
// XSS prevention
// CSP headers
// Rate limiting
// Bot protection
// mTLS
// Secrets rotation