import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css'
const Footer = () => {
    return <Fragment>
        <footer className={`${styles.footer} ${styles.container}`} id='footer'>
            {/* <ul>
            <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                <Link href={'/'}>
                <a><li>Experience</li></a>
                </Link>
                <Link href={'/'}><a><li>Skills</li></a></Link>
                <Link href={'/'}><a><li>Projects</li></a></Link>
                <Link href={'/'}><a><li>Contact Me</li></a></Link>
            </ul> */}
            <Link href={'/portfolio/'}>To Top</Link>
        </footer>
    </Fragment>
}

export default Footer