export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e89fb462b46a4580aafb775',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-b87m8zuy',
                  apiId: 'b89fa3b3-6109-4884-a835-1a0367c76351'
                },
                {
                  buildHookId: '5e89fb465412ed2c53133018',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tc6vnu38',
                  apiId: '47ac586b-821e-44ef-b3d5-7fbc5c38ebf8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kevinrodriguez-io/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tc6vnu38.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
