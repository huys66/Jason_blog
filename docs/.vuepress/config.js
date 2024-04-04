module.exports = {
    title: '黄不逗--个人博客',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 4,
        nav: [ // 导航栏配置
            {
                text: '首页',
                link: '/'
            },
            {
                text: '个人博客',
                link: '/blog/vue/a'
            },
            {
                text: '前端工具',
                link: '/web/tools/vscode'
            }
        ],
        sidebar: {
            '/web/tools/': [{
                    title: "Vs Code的使用",
                    children: ['vscode']
                },
                {
                    title: "Git的使用",
                    children: ['git']
                },
                {
                    title: "Sublime Text在前端中的使用",
                    children: ['SublimeText']
                },
                {
                    title: "WebStorm的使用",
                    children: ['WebStorm']
                },
                {
                    title: "Atom在前端的使用",
                    children: ['Atom']
                },
                {
                    title: "GitHub的使用",
                    children: ['GitHub']
                },
                {
                    title: "VS Code的使用积累",
                    children: ['VSCodeUse']
                },
                {
                    title: "chrome浏览器",
                    children: ['chrome']
                },
                {
                    title: "Emmet in VS Code",
                    children: ['Emmet']
                },
                {
                    title: "whistle网络抓包",
                    children: ['whistle']
                }
            ],
            '/blog/vue/': [{
                title: "Vue相关",
                children: [{
                    title: "Vue图片懒加载原理和实现",
                    children: ['a']
                }, {
                    title: "Vue虚拟列表实现原理",
                    children: ['b']
                }]
            }]
        }
    },
    plugins: ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],

}