import fs from 'fs';
import path from 'path';

import express from 'express';

export default (app: express.Express) => {
  const dir = path.join(__dirname, '..', 'controllers');

  fs.readdirSync(dir).forEach((file) => {
    const controller = path.join(dir, file);
    require(controller).default(app);
  });
};
