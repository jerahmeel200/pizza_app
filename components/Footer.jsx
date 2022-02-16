import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/pizza7.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            WE MAKE THE BEST PIZZA IN THE WORLD!!!!😋😎😎
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>BRANCH LOCATIONS</h1>
          <p className={styles.text}>
            555 Broadway
            <br /> Jos
            <br /> +2348142406690
          </p>
          <p className={styles.text}>
            555 Broadway
            <br /> Jos
            <br /> +2348142406690
          </p>
          <p className={styles.text}>
            555 Broadway
            <br /> Jos
            <br /> +2348142406690
          </p>
          <p className={styles.text}>
            555 Broadway
            <br /> Jos
            <br /> +2348142406690
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 9:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
