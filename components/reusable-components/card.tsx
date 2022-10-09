import React, { FC } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { ScriptProps } from "next/script";

interface Items {
        sno?: number,
        title?: string,
        desc?: string,
        techUsed?: string    
}


const Card: FC<Items> = ({title, desc, techUsed}) => {
return(<React.Fragment>
    <div style={{backgroundColor:'grey'}} className='card_project'>
        <span className={'card_desc_title'}>{title}</span>
        <div className="card_project_content card_desc_bg">
            <div>{desc}</div>
            <div>{techUsed}</div>
            {/* <div><Image src="/Expressjs.png" width={}/></div> */}
        </div>
    </div>
</React.Fragment>)
}

export default Card