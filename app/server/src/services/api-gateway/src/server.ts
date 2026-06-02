import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 100
  })
);

app.use('/auth', authProxy);
app.use('/render', renderProxy);