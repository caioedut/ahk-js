import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

import { v4 as uuidv4 } from 'uuid';

const scriptDir = '_temp';

if (!fs.existsSync(scriptDir)) {
  fs.mkdirSync(scriptDir);
}

const Ahk = {
  run(raw: string) {
    const uuid = uuidv4();
    const file = path.join(scriptDir, `${uuid}.ahk`);

    const returnValue = raw.includes('Output');

    let outFile: string = '';
    let script = this.parseRaw(raw);

    if (returnValue) {
      outFile = path.join(scriptDir, `${uuid}.json`);

      script = `
         Output(str) {
          FileAppend, %str%, ${outFile}
         }

        ${script}
      `;
    }

    fs.appendFileSync(file, script);
    let buffer = spawnSync("lib\\ahk\\AutoHotkeyU64.exe", file);

    if (returnValue) {
      buffer = fs.readFileSync(outFile);
      fs.unlinkSync(outFile);
    }

    fs.unlinkSync(file);

    return buffer.toString();
  },
  parseRaw(raw: string) {
    return raw.replace(/undefined|null/g, '');
  },
  parseResponse(response: string) {
    return JSON.parse(response);
  },
};

export default Ahk;
