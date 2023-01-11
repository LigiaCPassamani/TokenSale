import MyTokenExample from "../contracts/MyTokenExample.json";
import web3 from "./web3";

const tokenIntance = new web3.eth.Contract(
    MyTokenExample.abi,
    "0x6F61a18cBDc229a557cd0D33414aFbc283Bfc470",
  );

export default tokenIntance;