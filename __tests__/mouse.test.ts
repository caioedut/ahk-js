import Mouse from '../src/providers/Mouse';

test('Move mouse to position 100x100', () => {
  const pos = Mouse.move({ x: 100, y: 100 }).getPos();
  expect(pos).toMatchObject({ x: 100, y: 100 });
});
