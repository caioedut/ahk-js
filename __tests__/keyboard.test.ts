import Keyboard from '../src/providers/Keyboard';

test('Keyboard', () => {
  expect(Keyboard.getKeyState('Enter')).toEqual('0');
});
