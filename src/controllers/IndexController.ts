import express, { Express } from 'express';

const uri = '/';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ env: process.env.NODE_ENV });
});

export default (app: Express) => app.use(uri, router);
