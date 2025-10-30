import initMongoDB from './db/initMongoDB.js';
import setupServer from './setupServer.js';

await initMongoDB();
setupServer();
