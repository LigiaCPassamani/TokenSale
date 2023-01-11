import React, { useEffect, useState, useContext } from "react";
import '../index.css';
import web3 from "./web3";
import tokenIntance from "./token";


export const TokenContext = React.createContext();

export const InfosProvider = ({children}) => {

    // ---USER ACCOUNT
    const [holderArray, setHolderArray] = useState([]);
    const [account, setAccount] = useState('');
    const [accountBalance, setAccountBalance] = useState('');

    // ---TOKEN INFO
    const [noOfToken, setNoOfToken] = useState('');
    const [tokenName, setTokenName] = useState('');
    const [tokenStandard, setTokenStandard] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [tokenOwner, setTokenOwner] = useState('');
    const [saleAddress, setSaleAddress] = useState('');
    const [tokenSaleBal, settokenSaleBal] = useState('');

    async function getUserInfos() {
        let accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        
        const accountBalance = await tokenIntance.methods.balanceOf(accounts[0]).call();
        setAccountBalance(accountBalance)
    }

    async function getTokenInfos() {
        const tokenName = await tokenIntance.methods.name().call();
        setTokenName(tokenName);
        const tokenSymbol = await tokenIntance.methods.symbol().call();
        setTokenSymbol(tokenSymbol);
        const tokenOwner = await tokenIntance.methods.owner().call();
        setTokenOwner(tokenOwner);
        const tokenSupply = await tokenIntance.methods.totalSupply().call();
        setNoOfToken(tokenSupply);
        setTokenStandard('ERC20');
        const tokenSaleBal = await tokenIntance.methods.balanceOf("0x2858B805B19859F2Af9aA11883fCddffEb262336").call();
        settokenSaleBal(tokenSaleBal);
    }

    return (
        <TokenContext.Provider value= {{ 
            getUserInfos,
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
            saleAddress
        }} 
        >{children}</TokenContext.Provider>
    );
        
}
