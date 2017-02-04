var config = require('config');

module.exports = {
  'should have expected url': function(client) {
    console.log('using config', config);
    client
      .url('https://github.com/' + config.repo.owner + '/')
      .assert.urlEquals('https://github.com/' + config.repo.owner + '/')
      .end();
  }
};
