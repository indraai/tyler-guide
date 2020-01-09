
const config = {
  dest:'./q',
  base: '/q/',
  title: 'tyler.guide',
  description: 'A guide made by the community of Tyler for the users.',
  head: [
		['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'title', content: 'Tyler.guide' }],
    ['meta', { name: 'description', content: 'A guide made by the community of Tyler for the users.' }],
		['meta', { name: 'theme-color', content: '#3e7baf' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { name: 'og:title', content: 'Tyler Guide' }],
		['meta', { name: 'og:description', content: 'A guide made by the community of Tyler for the users.' }],
		['meta', { name: 'og:type', content: 'website' }],
		['meta', { name: 'og:url', content: 'https://tyler.guide/' }],
		['meta', { name: 'og:locale', content: 'en_US' }],
		['meta', { name: 'og:image', content: '/meta-image.png' }],
	],
  plugins: [],
  themeConfig: {
    repo: 'https://github.com/indraai/tyler-guide/',
    repoLabel: 'github',
  	editLinks: true,
  	editLinkText: 'Edit Page',
    nav: [
      { text: 'team', link: 'https://tyler.team', target: '_blank', rel:''},
      { text: 'twitter', link: 'https://twitter.com/TylerDeva', target: '_blank', rel:''},
      { text: 'discord', link: 'https://discord.gg/kJ4QXng', target: '_blank', rel:''},
    ],
    sidebar: {
      '/': [
        {
          title: 'Getting Started',
          children: [
            '/begin/',
            '/begin/timeline/',
            '/begin/telecomix/',
            '/begin/project-89/',
            '/begin/project-mayhem/',
            '/begin/the-game-23/',
            '/begin/bad-self-eater/',
            '/begin/pepe-the-frog/',
            '/begin/pizzagate/',
            '/begin/cicada-3301/',
            '/begin/sirisys/',
            '/begin/qanon/',
            '/begin/zorgo/',
            '/begin/peter-thiel/',
          ]
        },
        {
          title: 'Instructions',
          children: [
            '/instructions/',
            '/instructions/tylerfun/',
            '/instructions/tylerdumb/',
            '/instructions/tylerdeva/',
            '/instructions/tylerdurden/',
          ]
        },
        {
          title: 'Sources',
          children: [
            '/sources/',
            '/sources/telecomix/',
            '/sources/project_89/',
            '/sources/pm2012/',
            '/sources/pm2013/',
            '/sources/michael/',
            '/sources/the_game_23/',
            '/sources/project_2020/',
            '/sources/cicada3301/',
          ]
        },
        '/disclaimer/'
      ],
    },
  },
};

// config.plugins.push(['@vuepress/google-analytics', { ga: 'UA-57632791-3' }]);

module.exports = config;
