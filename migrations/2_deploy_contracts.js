var SimpleStorage = artifacts.require("../contracts/SimpleArithmetics2.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};
