const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish('dist', {
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/ksr-nivas/ngxs-dropdown-tree.git'
}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('published gh-pages');
  }
});
