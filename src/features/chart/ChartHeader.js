import React from "react";
import styles from "./Chart.module.css";

// TODO: Implement
export const ChartHeader = ({ text }) => (
  <div className={styles.header}>
    <p className={styles.header__label}>Title</p>
    <p className={styles.header__text}>{text}</p>
  </div>
);
