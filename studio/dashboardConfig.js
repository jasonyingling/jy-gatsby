export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e19002387d557be198569b7',
                  title: 'Sanity Studio',
                  name: 'jy-gatsby-studio',
                  apiId: '6978a092-88d7-447f-ac22-3b72f5a89801'
                },
                {
                  buildHookId: '5e1900235596d5bfef2f6848',
                  title: 'Blog Website',
                  name: 'jy-gatsby',
                  apiId: 'e7962067-14bb-476a-8df5-afccb1e4a613'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yingles/jy-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://jy-gatsby.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
