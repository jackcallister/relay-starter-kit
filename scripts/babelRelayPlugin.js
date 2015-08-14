var getbabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../src/server/schema.json');

module.exports = getbabelRelayPlugin(schema.data);
