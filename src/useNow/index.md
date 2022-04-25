# useNow
Reactive current Date instance.
## Usage

```ts
import { useNow } from 'hooks-date'

const now = useNow()
// or
const { 
  now, 
  year, 
  seconds, 
  month, 
  day, 
  hours, 
  minutes, 
  milliseconds, 
  week 
} = useNow({ isExtend: true })
```
