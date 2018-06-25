const ghpages = require('gh-pages');

ghpages.publish('build', {
  src: [
    '**/*',
    '!**/*.map',
  ],
  branch: 'master',
  repo: 'https://github.com/hahnlee/sn0wle0pard.github.io.git',
  dotfiles: true,
});
