import * as dotenv from 'dotenv';

dotenv.config();

export const BASE_URL = process.env.BASE_URL || 'https://animated-gingersnap-8cf7f2.netlify.app/';

export const CREDENTIALS = {
  email: process.env.TEST_EMAIL as string,
  password: process.env.TEST_PASSWORD as string,
};
