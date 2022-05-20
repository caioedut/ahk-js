CURRENT IN DEVELOPMENT

``yarn install ahk-js`` or ``npm install ahk-js``

## Providers

### Mouse

### click(options: Object)
```typescript
Mouse.click({
  whichButton?: Enum(left|right|middle);
  x?: number;
  y?: number;
  clickCount?: string;
  speed?: string;
  downOrUp?: string;
  relative?: string;
})
```

### move(options: Object)
```typescript
Mouse.move({
  x: number;
  y: number;
  speed? : string;
  relative? : string;
})
```

### getPos(options: Object)
```typescript
Mouse.getPos({
  flag?: number
})
```

### Keyboard

### type(text: string)
```typescript
Keyboard.type(text: string)
```

### send(keys: string, modifierKeys: Object)
```typescript
Keyboard.send(keys: string, {
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  win?: boolean;
})
```
