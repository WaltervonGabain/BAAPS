const Storage = artifacts.require("BAAPS");

module.exports = function (deployer) {
  deployer.deploy(Storage);
};
