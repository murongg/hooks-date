# useNow
Reactive current Date instance.
## Demo

<DemoContainer>
<p class="demo-source-link"><a href="https://github.com/murongg/hooks-date/tree/main/src/useNow/demo.vue" targat="blank">source</a></p>
<Demo/>
</DemoContainer>
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


## Source

[Source](https://github.com/murongg/hooks-date/tree/main/src/useNow/index.ts) • [Demo](https://github.com/murongg/hooks-date/tree/main/src/useNow/demo.vue) • [Docs](https://github.com/murongg/hooks-date/tree/main/src/useNow/index.md)


<script setup>
import Demo from './demo.vue'
</script>
