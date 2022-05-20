import Ahk from './Ahk';

enum ClickButtonEnum {
  left,
  right,
  middle,
  x1,
  x2,
}

type MouseClick = {
  whichButton?: ClickButtonEnum;
  x?: number;
  y?: number;
  clickCount?: string;
  speed?: string;
  downOrUp?: string;
  relative?: string;
};

type MouseMove = {
  x: number;
  y: number;
  speed?: string;
  relative?: string;
};

type MouseGetPos = {
  flag?: number;
};

const Mouse = {
  click(options: MouseClick) {
    const { whichButton, x, y, clickCount, speed, downOrUp, relative } = options;

    const raw = `MouseClick, ${whichButton}, ${x}, ${y}, ${clickCount}, ${speed}, ${downOrUp}, ${relative}`;
    Ahk.run(raw);

    return this;
  },
  move(options: MouseMove) {
    const { x, y, speed, relative } = options;

    const raw = `MouseMove, ${x}, ${y}, ${speed}, ${relative}`;
    Ahk.run(raw);

    return this;
  },
  // TODO TYPE
  getPos(options?: MouseGetPos | null) {
    const { flag = 0 } = options || {};

    const raw = `
      MouseGetPos, OutputVarX, OutputVarY, , , ${flag}
      Output("{""x"": " OutputVarX ", ""y"": " OutputVarY "}")
    `;

    return Ahk.run(raw, true);
  },
};

export default Mouse;
