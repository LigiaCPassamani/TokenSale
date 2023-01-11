import React, { useEffect, useState, useContext } from "react";
import tokenSaleInstance from "../../instance/tokenSale";
import web3 from "../../instance/web3";
import "./transfer.css";
import "../../pages/home.css"
import loading from "../../img/loading.gif"
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Transfer = ({ noOfToken, tokenName, tokenStandard, tokenSymbol, tokenSaleBal, saleAddress }) => {

    const [transferAccount, serTransferAccount] = useState('')
    const [tokensToPurchase, setTokensToPurchase] = useState(0);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
    }, [])

    async function buyTokens() {
        setProcessing(true)
        try {
            let accounts = await web3.eth.getAccounts();
            await tokenSaleInstance.methods.buyTokens(transferAccount).send({
                from: accounts[0],
                value: tokensToPurchase
            });
        } catch (err) {
            console.log(err.message);
        }
        setProcessing(false)
        window.location.reload(true)
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Loading</Popover.Header>
            <Popover.Body>
                <img src={loading} width={200}></img>
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="transfer">
            <div className="transfer_box">
                <div className="transfer_box_left">
                    <h2>Token Analytics</h2>
                    <div className="transfer_box_left_box">
                        <p>
                            Token Name {""}
                            <span>{tokenName}</span>
                        </p>
                        <p>
                            Token Supply {""}
                            <span>{noOfToken}</span>
                        </p>
                        <p>
                            Token Symbol {""}
                            <span className="cstToken">  CST
                            </span>
                        </p>
                        <p>
                            Token Left {""}
                            <span>{tokenSaleBal}</span>
                        </p>
                    </div>
                </div>

                <div className="transfer_box_right">
                    <h2>Buy Token</h2>
                    <input placeholder="Address" type="text" onChange={(e) => serTransferAccount(e.target.value)}></input>
                    <input placeholder="Value in wei" type="value" onChange={(e) => setTokensToPurchase(e.target.value)}></input>
                    <div className="transfer_box_right_btn">
                        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                            <button onClick={() => buyTokens(transferAccount, tokensToPurchase)}>Buy Token</button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer;