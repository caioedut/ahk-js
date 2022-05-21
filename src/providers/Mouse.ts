import Ahk from './Ahk';

type MouseButton = 'left' | 'right' | 'middle' | 'x1' | 'x2';

type MouseClick = {
  x?: number;
  y?: number;
  button?: MouseButton;
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

type MouseDrag = MouseMove & {
  toX: number;
  toY: number;
  button?: MouseButton;
};

type MouseGetPos = {
  flag?: number;
};

const Mouse = {
  click(options?: MouseClick) {
    const { button, x, y, clickCount, speed, downOrUp, relative } = options || {};

    const raw = `MouseClick, ${button}, ${x}, ${y}, ${clickCount}, ${speed}, ${downOrUp}, ${relative}`;
    Ahk.run(raw);

    return this;
  },
  move(options: MouseMove) {
    const { x, y, speed, relative } = options;

    const raw = `MouseMove, ${x}, ${y}, ${speed}, ${relative}`;
    Ahk.run(raw);

    return this;
  },
  drag(options: MouseDrag) {
    const { x, y, toX, toY, button, speed, relative } = options;

    const raw = `MouseClickDrag, ${button}, ${x}, ${y}, ${toX}, ${toY}, ${speed}, ${relative}`;
    Ahk.run(raw);

    return this;
  },
  getPos(options?: MouseGetPos) {
    const { flag = 0 } = options || {};

    const raw = `
      MouseGetPos, OutputVarX, OutputVarY, , , ${flag}
      Print("{""x"": " OutputVarX ", ""y"": " OutputVarY "}")
    `;

    return Ahk.run(raw);
  },
};

export default Mouse;
