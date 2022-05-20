import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const scriptDir = '_temp';

if (!fs.existsSync(scriptDir)) {
  fs.mkdirSync(scriptDir);
}

const Ahk = {
  run(raw: string) {
    const uuid = uuidv4();
    const file = path.join(scriptDir, `${uuid}.ahk`);

    const script = `
      Print(str) {
        FileAppend, %str%, *
      }

      ${raw.replace(/undefined|null/g, '')}
    `;

    fs.appendFileSync(file, script);

    const buffer = spawnSync('lib\\ahk\\AutoHotkeyU64.exe', [file]);
    const response = buffer.stdout.toString();

    fs.unlinkSync(file);

    const isJSON = ['{', '['].includes(response.trim().substr(0, 1));

    return isJSON ? JSON.parse(response) : response;
  },
};

export default Ahk;
