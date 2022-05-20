import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const scriptDir = '_temp';

if (!fs.existsSync(scriptDir)) {
  fs.mkdirSync(scriptDir);
}

const Ahk = {
  run(raw: string, json: boolean = false) {
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
    let buffer: any = spawnSync('lib\\ahk\\AutoHotkeyU64.exe', [file]);

    if (returnValue) {
      buffer = fs.readFileSync(outFile);
      fs.unlinkSync(outFile);
    }

    fs.unlinkSync(file);

    const response = buffer.toString();

    return json ? JSON.parse(response) : response;
  },
  parseRaw(raw: string) {
    return raw.replace(/undefined|null/g, '');
  },
};

export default Ahk;
