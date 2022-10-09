import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
// import Introduction from "./introduction";

const Introduction = () => {
  return (
    <React.Fragment>
      <div>
        <div className={`${styles.main} ${styles.Introduction_div}`}>
          <div>
            <div>
              <h1 className={styles.title}>Hi, My name is Prateek Kumar</h1>
              <p className={styles.description}>
                I am a Full Stack Developer with most experience in Frontend
                Development
              </p>
              <p className={styles.description2}>
                Next JS | Spartacus | Angular | React
              </p>
              <p className={styles.description2}>
                Node JS | Express JS | Mongo DB
              </p>

              <p className={styles.description2}>Automation | Ecommerce</p>
            </div>
          </div>
          <div className={styles.down_arrow}>
            <p className={styles.down_arrow_desc}>
              Scroll down for more Information
            </p>
            <Image
              src="/down-arrow.svg"
              alt="down arrow"
              width={720}
              height={160}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Introduction;
