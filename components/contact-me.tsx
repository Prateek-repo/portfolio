import Link from "next/link";
import React from "react";

const Contact = () => {
    const contacts = [{
        sno: 1,
        contactplace: 'Linkedin',
        contactid: "https://www.linkedin.com/login"
    },
    {
        sno: 2,
        contactplace: 'Mail me',
        contactid: "mailto:prateekkumarofficial01@gmail.com"
    }]
    return <React.Fragment>
       <h2 id="center_h3">Contact Me</h2>
       <div  className="card_content card_project_content">
      {contacts.map((item) => {
        return <a key={item.sno} href={item.contactid} target={"_blank"}
        rel={"noreferrer"}>
        <h3>{item.contactplace}</h3>
        </a>
        })}
       
       </div>
</React.Fragment>
}

export default Contact