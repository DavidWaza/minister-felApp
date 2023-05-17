import React from "react";
import styles from "./page.module.css";
import { name, position, citation } from "../../../lib/userdata";
import Nav from "../components/Nav";

export default function Biography() {
  return (
    <>
    <Nav />
      <div className={styles.header}>
        <p>Biography</p>
      </div>
      <div className={styles.nameTitle}>
        <p>{name}</p>
      </div>
      <div className={styles.title}>
        <p>({position})</p>
      </div>
      <div className={styles.citation} style={{ whiteSpace: "pre-line" }}>
        {citation}
      </div>
    </>
  );
}
