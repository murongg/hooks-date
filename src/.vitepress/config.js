// @ts-expect-error missing type
import base from '@vue/theme/config';
import highlight from './plugins/highlight';
import { getFunctionNames } from './utils';
const themeConfig = async () => {
    const config = await base();
    config.markdown.highlight = await highlight();
    return config;
};
const FunctionsSideBar = getFunctionsSideBar();
const sidebar = {
    '/functions': FunctionsSideBar,
};
getFunctionNames().map(func => {
    sidebar[`/${func}`] = FunctionsSideBar;
});
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    extends: themeConfig,
    title: 'HooksDate',
    description: 'HooksDate',
    lang: 'en-US',
    themeConfig: {
        // logo: '/favicon.svg',
        repo: 'vueuse/vueuse',
        docsDir: 'packages',
        editLinks: true,
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/murongg/hooks-date' },
        ],
        nav: [
            {
                text: 'Functions',
                items: [
                    {
                        text: '',
                        items: [
                            { text: 'All Functions', link: '/functions#' },
                            { text: 'Recent Updated', link: '/functions#sort=updated' },
                        ],
                    },
                ],
            },
        ],
        sidebar,
    },
    head: [
        ['meta', { name: 'theme-color', content: '#ffffff' }],
    ],
};
function getFunctionsSideBar() {
    const links = [];
    for (const name of getFunctionNames()) {
        links.push({
            text: name,
            link: `${name}/`,
        });
    }
    return [{
            text: "Functions",
            items: links
        }];
}
export default config;
