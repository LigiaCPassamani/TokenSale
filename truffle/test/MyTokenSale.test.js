const CrowdSale = artifacts.require("Crowdsale");
const CodeScriptToken = artifacts.require("CodeScriptToken");

var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
module.exports = chai;

const expect = chai.expect;

contract("TokenSale Test", async (accounts) => {

    const [deployerAccount, recipient, anotherAccount] = accounts;

    it('mint tokens for contract', async () => {
        let instanceToken = await CodeScriptToken.deployed();
        let saleInstance = await CrowdSale.deployed();
        return expect(instanceToken.mint(saleInstance.address, 1000)).to.eventually.be.fulfilled;
    });

    it("buy tokens", async () => {
        let saleInstance = await CrowdSale.deployed();
        return expect(saleInstance.buyTokens(anotherAccount, {from: anotherAccount, value: web3.utils.toWei("200", "wei")})).to.eventually.be.fulfilled;
    });

});