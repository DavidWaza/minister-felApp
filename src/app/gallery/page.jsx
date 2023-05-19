"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Slides } from "../components/slides";
import styles from "./gallery.module.css";
import biostyles from "../biography/page.module.css";
import Nav from "../components/Nav";
import { Container, Row, Col } from "react-bootstrap";

export default function Gallery() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <Container>
        <Nav />
        <div className={biostyles.header}>
          <p className="mb-5">Gallery</p>
        </div>
        <Row>
          {Slides.map(({ src }, index) => (
            <Col xs={4} sm={4} md={6} key={index}>
              <img
                src={src}
                alt="alt"
                onClick={() => setOpen(true)}
                className={styles.imgSize}
              />
            </Col>
          ))}
        </Row>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={Slides}
        ></Lightbox>
      </Container>
    </section>
  );
}
