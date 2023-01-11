import React, { useEffect, useState, useContext } from "react";
import "./navBar.css";
import { TokenContext } from "../../instance/infos";

const NavBar = () => {
    const {account, accountBalance} = useContext(TokenContext);
    return (
        <div className="navBar">
            <div className="navBar_box">
                <div className="navBar_box_left">
                    <h1>MTE Token</h1>
                </div>
                <div className="navBar_box_right">
                    <p>
                        Token Balance {""} {""} <span>{accountBalance}</span>
                    </p>
                    <p>
                       <span> User {""} {account}</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default NavBar;