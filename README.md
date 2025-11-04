> CURRENT IN DEVELOPMENT

> PULL REQUESTS ARE WELCOME!


# Install
```shell
npm install ahk-js
# OR
yarn add ahk-js
```

# Usage
You can import providers like:
```typescript
import { Keyboard, Mouse, Window } from 'ahk-js';
```

## Mouse

### click
```typescript
Mouse.click({
  button?: 'left' | 'middle' | 'right' | 'x1' | 'x2';
  x?: number;
  y?: number;
  count?: string;
  speed?: string;
  downOrUp?: '' | 'D' | 'U';
  relative?: string;
})
```

### drag
```typescript
Mouse.drag({
  button?: 'left' | 'middle' | 'right' | 'x1' | 'x2';
  x: number;
  y: number;
  toX: number;
  toY: number;
  speed?: string;
  relative?: string;
})
```

### move
```typescript
Mouse.move({
  x: number;
  y: number;
  speed? : string;
  relative? : string;
})
```

### getPos
```typescript
Mouse.getPos({
  flag?: number
})
```

## Keyboard

### type
```typescript
Keyboard.type(text: string)
```

### send
```typescript
Keyboard.send(keys: string, {
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  win?: boolean;
})
```

### getKeyState
```typescript
Keyboard.getKeyState(key: string, mode?: 'P' | 'T')
```

## Window

### activate
```typescript
Window.activate({
  title?: ahk_class | ahk_id | ahk_pid | ahk_exe | string;
  text?: string;
  excludeTitle?: string;
  excludeText?: string;
})
```

### close
```typescript
Window.close({
  title?: ahk_class | ahk_id | ahk_pid | ahk_exe | string;
  text?: string;
  excludeTitle?: string;
  excludeText?: string;
  secondsToWait?: number;
})
```

### exist
```typescript
Window.exist({
  title?: ahk_class | ahk_id | ahk_pid | ahk_exe | string;
  text?: string;
  excludeTitle?: string;
  excludeText?: string;
})
```

### hide
```typescript
Window.hide({
  title?: ahk_class | ahk_id | ahk_pid | ahk_exe | string;
  text?: string;
  excludeTitle?: string;
  excludeText?: string;
})
```

### kill
```typescript
Window.kill({
  title?: ahk_class | ahk_id | ahk_pid | ahk_exe | string;
  text?: string;
  excludeTitle?: string;
  excludeText?: string;
  secondsToWait?: number;
})
```

### maximize
```typescript
Window.maximize({
  title?: ahk_class | ahk_id | ahk_pid | ahk_exe | string;
  text?: string;
  excludeTitle?: string;
  excludeText?: string;
})
```

### minimize
```typescript
Window.minimize({
  title?: ahk_class | ahk_id | ahk_pid | ahk_exe | string;
  text?: string;
  excludeTitle?: string;
  excludeText?: string;
})
```

### restore
```typescript
Window.restore({
  title?: ahk_class | ahk_id | ahk_pid | ahk_exe | string;
  text?: string;
  excludeTitle?: string;
  excludeText?: string;
})
```
