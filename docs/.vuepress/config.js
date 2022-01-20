module.exports = {
    title: 'PlumAdmin 文档',
    theme: 'reco',
    themeConfig: {
        // 主题
        codeTheme: 'tomorrow',
        // 导航
        nav: [
            {text: '🏠首页', link: '/'},
            {text: '📖文档', link: '/docs/'},
            {text: '🤔常见问题', link: '/FAQ'},
            {text: 'GITHUB', link: 'https://github.com/vuepress-reco/vuepress-theme-reco'},
            {text: 'GITEE', link: 'https://github.com/vuepress-reco/vuepress-theme-reco'}
        ],
        // 备案
        record: '黔ICP备20000664号-3',
        recordLink: 'https://beian.miit.gov.cn/',
        // 项目开始时间，只填写年份
        startYear: 'plumadmin 2021',
        // 更新时间
        lastUpdated: 'Last Updated',
        // 侧边栏
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        sidebar: {
            '/docs/': [
                {
                    title: '开发指南',
                    collapsable:false,
                    children: [
                        '',
                        'install',
                        'dir'
                    ]
                },
                {
                    title: '后端',
                    children: [
                        'service/'
                    ]
                },
                {
                    title: '前端',
                    children: [
                        'admin/curd_components',
                        'admin/dialog_form_components',
                        'admin/upload_components'
                    ]
                }
            ]
        }
    }
}
