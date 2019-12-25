module.exports = {
  dest:'./docs',
  base: '/docs/',
  title: 'tyler.guide',
  description: 'The definitive guide on Tyler information and how to use the system.',
  themeConfig: {
    nav: [
      { text: 'team', link: 'https://tyler.team', target: '_blank', rel:''},
      { text: 'twitter', link: 'https://twitter.com/TylerDeva', target: '_blank', rel:''},
      { text: 'discord', link: 'https://discord.gg/kJ4QXng', target: '_blank', rel:''},
    ],
    sidebar: [
      ['/', 'Home'],
      ['/pastebin', 'Pastebin'],
    ],
  }
}
