// vite.config.ts
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
// import IconsResolver from 'unplugin-icons/resolver'

import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

export default {
  plugins: [
    // plugins
    MarkdownTransform(),
    Components({
      dirs: resolve(__dirname, '.vitepress/theme/components'),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        // IconsResolver({
        //   componentPrefix: '',
        // }),
      ],
      dts: './.vitepress/components.d.ts',
      transformer: 'vue3',
    }),
    Unocss(),
  ],
}
