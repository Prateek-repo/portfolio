import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Skills = () => {
  return (
    <React.Fragment>
      <div>
        <h2 id="center_h3">Skills</h2>
        <div className={styles.disp_row_skills}>
          <div>
            <h3>Frontend & State Management</h3>
            <h4>Development Frameworks</h4>
            <div className='skills_logo'>
              <span>
                <Image
                  src="/angular_logo.png"
                  alt="Angular Logo"
                  width={120}
                  height={70}
                />
              </span>
              <span>
                <Image
                  src="/spartacus-blue.png"
                  alt="Spartacus Logo"
                  width={160}
                  height={70}
                />
              </span>
              <span>
                <Image
                  src="/React-logo.png"
                  alt="React Logo"
                  width={160}
                  height={70}
                />
              </span>
              <span className={styles.logo}>
                <Image
                  src="/Nextjs-logo.svg"
                  alt="Next JS Logo"
                  width={160}
                  height={70}
                />
              </span>
              
              <span>
                <Image
                  src="/redux_logo.png"
                  alt="Redux Logo"
                  width={160}
                  height={70}
                />
              </span>
              <span>
                <Image
                  src="/ngrx_logo.svg"
                  alt="ngrx Logo"
                  width={160}
                  height={70}
                />
              </span>
            </div>
            <h4>Testing Frameworks</h4>
            <div className='skills_logo'>
              <span>
                <Image
                  src="/Logo_jasmine.png"
                  alt="Jasmine Logo"
                  width={120}
                  height={70}
                />
              </span>
              <span>
                <Image
                  src="/Karma js.png"
                  alt="Karma Logo"
                  width={160}
                  height={70}
                />
              </span>
              <span>
                <Image
                  src="/Jest_logo.png"
                  alt="Jest Logo"
                  width={160}
                  height={70}
                />
              </span>
              <span>
                <Image
                  src="/enzyme.png"
                  alt="Enzyme Logo"
                  width={160}
                  height={70}
                />
              </span>
            </div>
          </div>
          <div>
            <h3>Backend & Database</h3>
            <h4>Development Frameworks</h4>
            <div className='skills_logo'>
            <span>
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"
                }
                alt="Node Logo"
                width={160}
                height={70}
              />
            </span>
            <span>
              <Image
                src="/Expressjs.png"
                alt="Express Logo"
                width={160}
                height={70}
              />
            </span>
            <span>
              <Image
                src="/mongodb_logo.png"
                alt="Mongo Logo"
                width={160}
                height={70}
              />
            </span>
            </div>
            <h4>Teseting Frameworks</h4>
            <div className='skills_logo'>
            <span>
              <Image
                src="/chai.png"
                alt="chai Logo"
                width={160}
                height={70}
              />
            </span>
            <span>
              <Image
                src="/mocha.svg"
                alt="mocha Logo"
                width={160}
                height={70}
              />
            </span>
            </div>
          </div>
          <div>
            <h3>Tools</h3>

            <div className='skills_logo'>
              <span>
                <Image
                  src="/postman_logo.png"
                  alt="Postman Logo"
                  width={150}
                  height={70}
                />
              </span>
              <span>
                <Image
                  src="/sonarqube-logo.png"
                  alt="SonarQube Logo"
                  width={150}
                  height={70}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
