import { join, resolve } from 'path'
import type { Plugin } from 'vite'
import fs from 'fs-extra'
import { getFunctionNames } from '../utils'

export function MarkdownTransform(): Plugin {
  const DIR_TYPES = resolve(__dirname, '../../../types/packages')
  const hasTypes = fs.existsSync(DIR_TYPES)

  if (!hasTypes)
    console.warn('No types dist found, run `npm run build:types` first.')

  return {
    name: 'vueuse-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md'))
        return null
      const [pkg, name, i] = id.split('/').slice(-3)
      if (getFunctionNames().includes(name) && i === 'index.md') {
        const frontmatterEnds = code.indexOf('---\n\n') + 4
        const firstSubheader = code.search(/\n## \w/)
        const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader
        const { footer, header, setupContainer } = await getFunctionMarkdown(pkg, name)
        if (header)
          code = code.slice(0, sliceIndex) + header + code.slice(sliceIndex)
        code = code + footer + setupContainer
      }

      return code
    },
  }
}

const DIR_SRC = resolve(__dirname, '../..')
const GITHUB_BLOB_URL = 'https://github.com/murongg/hooks-date/tree/main'

export async function getFunctionMarkdown(pkg: string, name: string) {
  const URL = `${GITHUB_BLOB_URL}/${pkg}/${name}`
  const hasDemo = fs.existsSync(join(DIR_SRC, name, 'demo.vue'))
  const typingSection = ''
  const links = ([
    ['Source', `${URL}/index.ts`],
    hasDemo ? ['Demo', `${URL}/demo.vue`] : undefined,
    ['Docs', `${URL}/index.md`],
  ])
    .filter(i => i)
    .map(i => `[${i![0]}](${i![1]})`).join(' • ')

  const sourceSection = `## Source\n\n${links}\n`
  let setupContainer = ''
  let demoConttainer = ''

  if (hasDemo) {
    setupContainer = `
<script setup>
import Demo from './demo.vue'
</script>`
    demoConttainer = `
## Demo

<DemoContainer>
<p class="demo-source-link"><a href="${URL}/demo.vue" targat="blank">source</a></p>
<Demo/>
</DemoContainer>
`
  }

  const footer = `${typingSection}\n\n${sourceSection}\n`
  const header = demoConttainer

  return {
    footer,
    header,
    setupContainer,
  }
}
