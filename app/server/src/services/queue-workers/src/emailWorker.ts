import { Worker } from 'bullmq';

new Worker('email-queue', async (job) => {
  console.log('Sending email', job.data);
});