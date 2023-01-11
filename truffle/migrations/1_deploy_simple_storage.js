const MyTokenExample = artifacts.require("MyTokenExample");
const TokenSale = artifacts.require("TokenSale");

module.exports = async function(deployer) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(MyTokenExample);
  await deployer.deploy(TokenSale, MyTokenExample.address);
  let instance = await MyTokenExample.deployed();
  await instance.mint(TokenSale.address, 10000);
}