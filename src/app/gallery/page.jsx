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
          <p>Gallery</p>
        </div>
        <section className="text-gray-400">
          <div className="container px-5 py-4 mx-auto flex flex-wrap">
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="md:p-2 p-1 w-full md:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-[400px] object-center block"
                    src="/img1.jpg"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="md:p-2 p-1 w-full md:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-[400px] object-center block"
                    src="/img2.jpg"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <video controls>
                    <source src='vid1.mp4' type='video/mp4' />
                  </video>
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="md:p-2 p-1 w-full">
                <video controls>
                    <source src='vid2.mp4' type='video/mp4' />
                  </video>
                </div>
                <div className="md:p-2 p-1 w-full md:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-[400px] object-center block"
                    src="/img3.jpg"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="md:p-2 p-1 w-full md:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-[400px] object-center block"
                    src="/img4.jpg"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="md:p-2 p-1 w-full md:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-[400px] object-center block"
                    src="/img5.jpg"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="md:p-2 p-1 w-full md:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-[400px] object-center block"
                    src="/img6.jpg"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-[400px] object-cover object-center block"
                    src="/img7.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-[400px] object-cover object-center block"
                    src="/img8.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full md:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-[400px] object-center block"
                    src="/biohero.jpg"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="md:p-2 p-1 w-full md:w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-[400px] object-center block"
                    src="/waterman.jpg"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
            </div>
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={Slides}
          ></Lightbox>
        </section>
      </Container>
    </section>
  );
}
