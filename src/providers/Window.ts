import Ahk from './Ahk';

type AhkClass = `ahk_class ${string}`;
type AhkID = `ahk_id ${string}`;
type AhkPID = `ahk_pid ${number}`;
type AhkExe = `ahk_exe ${string}`;
// type AhkGroup = unknown;

type Window = AhkClass | AhkExe | AhkID | AhkPID | string;

interface WindowGet {
  excludeText?: string;
  excludeTitle?: string;
  text?: string;
  title?: Window;
}

interface WindowClose extends WindowGet {
  secondsToWait?: number;
}

interface WindowKill extends WindowGet {
  secondsToWait?: number;
}

const Window = {
  activate(options?: WindowGet) {
    const { title, excludeText, excludeTitle, text } = options || {};

    const raw = `WinActivate, ${title}, ${text}, ${excludeTitle}, ${excludeText}`;
    Ahk.run(raw);

    return this;
  },
  close(options?: WindowClose) {
    const { title, excludeText, excludeTitle, secondsToWait, text } = options || {};

    const raw = `WinClose, ${title}, ${text}, ${secondsToWait}, ${excludeTitle}, ${excludeText}`;
    Ahk.run(raw);

    return this;
  },
  exist(options?: WindowGet) {
    const { title, excludeText, excludeTitle, text } = options || {};

    const raw = `
      Response := WinExist("${title}", "${text}", "${excludeTitle}", "${excludeText}")
      Print(Response)
    `;

    return Ahk.run(raw);
  },
  getPos(options?: WindowGet) {
    const { title, excludeText, excludeTitle, text } = options || {};

    const raw = `
      WinGetPos, OutX, OutY, OutWidth, OutHeight, ${title}, ${text}, ${excludeTitle}, ${excludeText}
      Print("{""x"": " OutX ", ""y"": " OutY ", ""width"": " OutWidth ", ""height"": " OutHeight "}")
    `;

    return Ahk.run(raw);
  },
  getText(options?: WindowGet) {
    const { title, excludeText, excludeTitle, text } = options || {};

    const raw = `
      WinGetText, OutputVar, ${title}, ${text}, ${excludeTitle}, ${excludeText}
      Print(OutputVar)
    `;

    return Ahk.run(raw);
  },
  getTitle(options?: WindowGet) {
    const { title, excludeText, excludeTitle, text } = options || {};

    const raw = `
      WinGetTitle, OutputVar, ${title}, ${text}, ${excludeTitle}, ${excludeText}
      Print(OutputVar)
    `;

    return Ahk.run(raw);
  },
  hide(options?: WindowGet) {
    const { title, excludeText, excludeTitle, text } = options || {};

    const raw = `WinHide, ${title}, ${text}, ${excludeTitle}, ${excludeText}`;
    Ahk.run(raw);

    return this;
  },
  kill(options?: WindowKill) {
    const { title, excludeText, excludeTitle, secondsToWait, text } = options || {};

    const raw = `WinKill, ${title}, ${text}, ${secondsToWait}, ${excludeTitle}, ${excludeText}`;
    Ahk.run(raw);

    return this;
  },
  maximize(options?: WindowGet) {
    const { title, excludeText, excludeTitle, text } = options || {};

    const raw = `WinMaximize, ${title}, ${text}, ${excludeTitle}, ${excludeText}`;
    Ahk.run(raw);

    return this;
  },
  minimize(options?: WindowGet) {
    const { title, excludeText, excludeTitle, text } = options || {};

    const raw = `WinMinimize, ${title}, ${text}, ${excludeTitle}, ${excludeText}`;
    Ahk.run(raw);

    return this;
  },
  restore(options?: WindowGet) {
    const { title, excludeText, excludeTitle, text } = options || {};

    const raw = `WinRestore, ${title}, ${text}, ${excludeTitle}, ${excludeText}`;
    Ahk.run(raw);

    return this;
  },
};

export default Window;
