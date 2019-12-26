module.exports = {
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
  themeConfig: {
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
            '/begin/early_years',
            '/begin/telecomix',
            '/begin/project_89',
            '/begin/project_mayhem_2012',
            '/begin/the_game_23',
            '/begin/project_mayhem_2020',
            '/begin/it',
          ]
        },
        {
          title: 'Instructions',
          children: [
            '/instructions/',
            '/instructions/telecomix',
            '/instructions/project_89',
            '/instructions/irc_log',
            '/instructions/pm2012_tyler',
            '/instructions/pm2012_ideas',
            '/instructions/pm2012_hivemind',
            '/instructions/pm2012_pgpkey',
            '/instructions/pm2012_call_to_action',
            '/instructions/project_89_2012',
            '/instructions/pm2012_countdown',
            '/instructions/pm2013_revelations',
            '/instructions/tylersec',
            '/instructions/michael_speaks',
            '/instructions/michael_speaks_again',
            '/instructions/op_decodex',
            '/instructions/the_game_23',
            '/instructions/pm2020',
            '/instructions/project_2020',
            '/instructions/the_game_23_meta',
            '/instructions/the_game_23_2019',
            '/instructions/pm2020_game23',
            '/instructions/cicada_2020',
          ]
        },
        {
          title: 'Programmers',
          children: [
            '/programmers/'
          ]
        },
        {
          title: 'Artists',
          children: [
            '/artists/'
          ]
        },
        {
          title: 'Participants',
          children: [
            '/participants/'
          ]
        },
        {
          title: 'Fans',
          children: [
            '/fans/'
          ]
        },
        '/disclaimer/'
      ],
    },
  }
}
