import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Introduction from "./introduction";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
  // let nav = document.querySelector("nav");
  // window.onscroll = () => {
  //   window.pageYOffset > 100
  //     ? nav.classList.add(navbgcolor)
  //     : nav.classList.remove(navbgcolor);
  window.addEventListener("scroll", () => {
    setScroll(window.pageYOffset > 50);
  });
  })
  return (
    <Fragment>
      <div >
        <nav className={scroll ? styles.navbgcolor+" "+styles.container : styles.container}>
          <span className={styles.logo}>
            <Image src="/p.svg" alt="Vercel Logo" width={72} height={50} />
          </span>
          <ul>
            <li>
              <Link href={"/portfolio/#experience"}>
                <a>Experience</a>
              </Link>
            </li>
            <li>
              <Link href={"/portfolio/#skills"}>
                <a>Skills</a>
              </Link>
            </li>
            <li>
              <Link href={"/portfolio/#projects"}>
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href={"/portfolio/#contactme"}>
                <a>
                  <button>Contact Me</button>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div >
          <div className={`${styles.background_image} ${styles.container}`}></div>
          <div className={styles.Introduction_div}>
          <Introduction />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
