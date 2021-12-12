# use-reduce

> The easiest way to use reduce function

[![NPM](https://img.shields.io/npm/v/use-reduce.svg)](https://www.npmjs.com/package/use-reduce) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-reduce
```

## Usage

```tsx
import * as React from 'react'

import { useAddAllElements, useMultiplyAllElements } from 'use-reduce'

const Example = () => {
  const example = useAddAllElements([1,2,3,4,5])
    
  return (
    <div>
      {example} // 15
    </div>
  )
}
```

## License

MIT © [justin-the-developer](https://github.com/justin-the-developer)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
