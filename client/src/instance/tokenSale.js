import TokenSale from "../contracts/TokenSale.json";
import web3 from "./web3";

const tokenSaleInstance = new web3.eth.Contract(
    TokenSale.abi,
    "0x2858B805B19859F2Af9aA11883fCddffEb262336",
  );

export default tokenSaleInstance;
