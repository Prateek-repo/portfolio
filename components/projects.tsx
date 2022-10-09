import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "./reusable-components/card"
const Projects = () => {
  const projects = [{
    sno: 1,
    title: "DigiProds",
    desc: "An Ecom website to sell digital products",
    techUsed: "Next JS | Strapi | Node JS | Express JS | Jest | Enzyme | Chai | Mocha"
  },
  {
    sno: 2,
    title: "BulkMails",
    desc: "A Website to automate emails",
    techUsed: "Next JS | Strapi | Node JS | Express JS | Jest | Enzyme | Chai | Mocha"
  },
  {
    sno: 3,
    title: "AmplifiedList",
    desc: "A Website to make spotify playlist rich",
    techUsed: "Next JS | Strapi | Node JS | Express JS | Jest | Enzyme | Chai | Mocha"
  },
  {
    sno: 4,
    title: "AutoInsta",
    desc: "A website to automate instagram posts and twitter's tweets",
    techUsed: "Next JS | Strapi | Node JS | Express JS | Jest | Enzyme | Chai | Mocha"
  }
]
    return <React.Fragment>
      <h2 id="center_h3">Projects</h2>
      <div  className="card_content">
      {projects.map((item) => {
      return <Card key={item.sno} title={item.title} desc={item.desc} techUsed={item.techUsed}/>
        })}
        </div>
</React.Fragment>
}

export default Projects