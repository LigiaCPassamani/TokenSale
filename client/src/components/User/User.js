import React from "react";
import Image from 'react-bootstrap/Image';
import "./user.css";
import mte from "../../img/mte.png"

const User = ({ holderArray, account}) => {
    return (
        <div className="user">
            {holderArray.map((el, i) => (
                <div key={i +1} className="user_box">
                    <h4 className="user_box_name">
                        User #{account.slice(0,22)}
                    </h4>
                    <div  className="user_box_price_box">
                        <p className="user_box_price">200 wei</p>
                    </div>
                    <div className="user_box_img">
                        <Image className="user_box_img_img" src={mte} alt="cstToken" width={35} height={35}></Image>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default User;