import express, { Express } from 'express';

const uri = '/public';

export default (app: Express) => app.use(uri, express.static('public'));
