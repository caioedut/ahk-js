import Ahk from './Ahk';

interface KeyboardModifierKeys {
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  win?: boolean;
}

const Keyboard = {
  type(text: string) {
    Ahk.run(`Send, ${text}`);
    return this;
  },
  send(keys: string, modifierKeys: KeyboardModifierKeys = {}) {
    let parsed = '';

    if (modifierKeys.ctrl) {
      parsed += '^';
    }

    if (modifierKeys.shift) {
      parsed += '+';
    }

    if (modifierKeys.alt) {
      parsed += '!';
    }

    if (modifierKeys.win) {
      parsed += '#';
    }

    parsed += `{${keys}}`;

    Ahk.run(`SendInput, ${parsed}`);
    return this;
  },
  getKeyState(key: string, mode?: 'P' | 'T') {
    const raw = `
      Response := GetKeyState("${key}", "${mode}")
      Print(Response)
    `;

    return Ahk.run(raw);
  },
};

export default Keyboard;
