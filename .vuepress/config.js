/*
 * Copyright (c) 2019. Pandranki Global Private Limited
 */

module.exports = {
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/getting-started' },
            { text: 'Developer Console', link: '/console' },
        ],
        sidebarDepth: 2,
        sidebar: [
            "/getting-started",
            {
                title: 'Basics',
                collapsable: true,
                children: [
                    '/basics/what-is-an-api'
                ]
            },
            {
                title: 'Creating your tribe app',
                collapsable: true,
                children: [
                    '/creating-tribe-app/create-an-oauth-application',
                    '/creating-tribe-app/authorize-requests-to-your-app'
                ]
            },
            {
                title: 'OAuth',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'GraphQL Overview',
                collapsable: true,
                children: [
                    '/graphql/graphql-overview',
                    '/graphql/basic-usage',
                    '/graphql/concepts',
                    '/graphql/playground'
                ]
            },
        ],
        displayAllHeaders: true,
    }
};