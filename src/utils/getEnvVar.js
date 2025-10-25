import dotenv from 'dotenv';

dotenv.config();

export default function getEnvVar(payload) {
  const value = process.env[payload];
  if (value) return value;
  throw new Error(`Missing process env: ${payload}`);
}
