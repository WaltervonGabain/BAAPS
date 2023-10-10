const BAAPS = artifacts.require("BAAPS");

contract("BAAPS", (accounts) => {
  beforeEach(async () => {
    contract = await BAAPS.new();
  });

  it("should ", async () => {});
});
