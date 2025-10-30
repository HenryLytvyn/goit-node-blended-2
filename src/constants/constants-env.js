import getEnvVar from '../utils/getEnvVar.js';

export const APP_PORT = Number(getEnvVar('APP_PORT'));

export const MONGODB_USER = getEnvVar('MONGODB_USER');
export const MONGODB_PASSWORD = getEnvVar('MONGODB_PASSWORD');
export const MONGODB_URL = getEnvVar('MONGODB_URL');
export const MONGODB_DB = getEnvVar('MONGODB_DB');
