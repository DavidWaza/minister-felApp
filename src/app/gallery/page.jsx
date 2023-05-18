"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Grid, Container, Box } from "@mui/material";
import { Slides } from "../components/slides";
import styles from "./gallery.module.css";
import biostyles from '../biography/page.module.css'
import Nav from "../components/Nav";

export default function Gallery() {
  const [open, setOpen] = useState(false);

  const imgElements = Slides.map(({ src }, index) => (
    <Grid item xs={12} md={4} key={index}>
      <img
        src={src}
        alt="alt"
        onClick={() => setOpen(true)}
        className={styles.imgSize}
      />
    </Grid>
  ));
  return (
    <section className="flex flex-col items-center text-center gap-0">
      <Container>
        <Nav />
        <div className={biostyles.header}>
          <p className="mb-5">Gallery</p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {imgElements}
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={Slides}
            ></Lightbox>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
