import React, { useEffect, useState, useContext } from "react";
import '../styles/home.css';
import { TokenContext } from "../instance/infos";
import Image from 'react-bootstrap/Image'
import mte from "../img/mte.png";
import Transfer from "../components/Transfer/Transfer";
import User from "../components/User/User"
import "./home.css"


const Home = () => {
  const { getUserInfos,
    getTokenInfos,
    holderArray,
    account,
    accountBalance,
    noOfToken,
    tokenName,
    tokenStandard,
    tokenSymbol,
    tokenOwner,
    tokenSaleBal,
    saleAddress } = useContext(TokenContext);

  useEffect(() => {
    getUserInfos();
    getTokenInfos();
  }, [])

  return (
    <div className="home">
      <div className="heroSection">
        <div className="heroSection_left">
          <h1>MTE Token</h1>
          <p>
            A example of a ERC20 token
          </p>

          <div className="heroSection_left_btn">
            <button className="btn">WhitePaper</button>
            <button className="btn">More</button>
          </div>
        </div>

          <div className="heroSection_right">
            <Image src={mte} alt="banner" width={200} height={200} className="heroSection_right_img"></Image>
            <Image src={mte} alt="banner" width={100} height={100} className="heroSection_right_img"></Image>
            <Image src={mte} alt="banner" width={50} height={50} className="heroSection_right_img"></Image>
            <Image src={mte} alt="banner" width={20} height={20} className="heroSection_right_img"></Image>
          </div>
      </div>

      <Transfer 
      noOfToken = {noOfToken}
      tokenName = {tokenName}
      tokenStandard = {tokenStandard}
      tokenSymbol = {tokenSymbol}
      tokenSaleBal = {tokenSaleBal}
      saleAddress = {saleAddress}
      />
      <User holderArray = {holderArray} 
      account = {account}/>
    </div>

  );
}


export default Home;
