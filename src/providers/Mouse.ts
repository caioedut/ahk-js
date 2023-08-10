import Ahk from './Ahk';

type MouseButton = 'left' | 'middle' | 'right' | 'x1' | 'x2';

type MouseClick = {
  button?: MouseButton;
  count?: string;
  downOrUp?: '' | 'D' | 'U';
  relative?: string;
  speed?: string;
  x?: number;
  y?: number;
};

type MouseMove = {
  relative?: string;
  speed?: string;
  x: number;
  y: number;
};

type MouseDrag = MouseMove & {
  button?: MouseButton;
  toX: number;
  toY: number;
};

type MouseGetPos = {
  flag?: number;
};

const Mouse = {
  click(options?: MouseClick) {
    const { button, count, downOrUp, relative, speed, x, y } = options || {};

    const raw = `MouseClick, ${button}, ${x}, ${y}, ${count}, ${speed}, ${downOrUp}, ${relative}`;
    Ahk.run(raw);

    return this;
  },
  drag(options: MouseDrag) {
    const { button, relative, speed, toX, toY, x, y } = options;

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
  move(options: MouseMove) {
    const { relative, speed, x, y } = options;

    const raw = `MouseMove, ${x}, ${y}, ${speed}, ${relative}`;
    Ahk.run(raw);

    return this;
  },
};

export default Mouse;
