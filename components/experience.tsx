import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Experience = () => {
  return (
    <React.Fragment>
        
        <div className={styles.disp_row}>
            <div>
      <h2>Experience</h2>
      <h3>
        <span>
          <Image
            src="/infosys_logo.svg"
            alt="Vercel Logo"
            width={120}
            height={30}
          />
        </span>
      </h3>

      <h3>Specialist Programmer</h3>
      <span>(Jan 2022 - present)</span>
      <div>
        <ul>
          <li>Working as Spartacus Developer</li>
          <li>Working on Ecommerce platform</li>
        </ul>
        <span>Tech used: Spartacus, Angular, NGRX</span>
      </div>
      <h3>Digital Specialist Engineer</h3>
      <span>(Nov 2020 - Dec 2021)</span>
      <div>
        <ul>
          <li>Worked as React Native Developer</li>
          <li>Worked on Task Management platform</li>
        </ul>
        <span>Tech used: React Native, Redux Saga</span>
      </div>
      </div>
      
          <Image
            src="https://cdn.pixabay.com/photo/2019/09/04/11/48/business-4451372_960_720.png"
            alt="Vercel Logo"
            width={400}
            height={50}
          />

        </div>
    </React.Fragment>
  );
};

export default Experience;
