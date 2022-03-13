const path = require("path");
require('babel-register')
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 8545,
      host: 'localhost',
      network_id: '*',
      gas: 6700000,
      from: '0x0D1AE39d23651eCb8c4d065d579dA46F795452F7'
    }
  },
  compilers: {
    solc: {
      version: "0.6.4"
      //Uncomment and update the solc version as shown here
   }
  }
};
