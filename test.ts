import { Keyboard, Mouse } from './index';

Mouse.move({ x: 600, y: 600 }).click({});
// Keyboard.type('TESTE');
Keyboard.send('a', { ctrl: true });

console.log('Mouse', Mouse.getPos({}));
