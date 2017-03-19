var config = require('config');

module.exports = {
  'should have expected url': function(client) {
    console.log('Component A: using config', config);
    client
      .url('https://github.com/' + config.componentA.repo.owner + '/')
      .assert.urlEquals('https://github.com/' + config.componentA.repo.owner + '/')
      .end();
  }
};
