import React from "react";
import styles from "./page.module.css";
import { name, position, citation } from "../../../lib/userdata";
import Nav from "../components/Nav";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function Biography() {
  return (
    <div className={styles.bodyWrapper}>
      <Nav />
      <div className={styles.header}>
        <p>Biography</p>
      </div>
      <Link href="/">
        <div className={styles.arrowLeft}>
          <BsArrowLeft className="mt-[6px]" />
          Prev
        </div>
      </Link>
      <Link href="/gallery">
        <div className="flex justify-end pr-5">
          Next
          <BsArrowRight className="mt-[6px]" />
        </div>
      </Link>

      <div className={styles.nameTitle}>
        <p>{name}</p>
      </div>
      <div className={styles.title}>
        <p>({position})</p>
      </div>
      <div className={styles.citation} style={{ whiteSpace: "pre-line" }}>
        {citation}
      </div>
      <div className={styles.arrowWrapper}>
        <Link href="/">
          <div className={styles.arrowLeftBottom}>
           <Image src='/left.png' alt='' height={50} width={50} />
          </div>
        </Link>
        <Link href="/gallery">
          <div className={styles.arrowRightBottom}>
          <Image src='/right.png' alt='' height={50} width={50} />
          </div>
        </Link>
      </div>
    </div>
  );
}
