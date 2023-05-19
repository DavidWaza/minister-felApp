"use client";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../hooks/useLocalStorage";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Container, Row, Col } from "react-bootstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [commentDetails, setCommentDetails] = useLocalStorage(
    "commentDetails",
    []
  );
  const onSubmit = (data) => setCommentDetails((current) => [...current, data]);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className="bg-[#707B7C]">
        <Container>
          <Row className="flex justify-center mt-[10%]">
            {commentDetails.map((comment, index) => {
              return (
                <Col
                  sm={4}
                  md={4}
                  xs={12}
                  key={index}
                  className="w-full py-[30px]"
                >
                  <div className="h-full bg-[#F0F3F4] pt-16 pb-24 shadow-lg shadow-blue-500/50 overflow-hidden text-center relative text-[18px]">
                    <p className="leading-relaxed text-[#212F3D]">
                      {comment?.textArea}
                    </p>
                    <br />
                    <hr className=" text-[#212F3D] w-1/2 m-auto mb-2" />
                    <p className=" primary_font text-[#212F3D]">
                      {comment?.firstName + " " + comment?.lastName}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="flex justify-center w-full">
          <div className="flex p-6 align-middle justify-center">
            <Button onClick={handleOpen}>
              <div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
                className="primary_font text-center text-white p-3 floating-button"
              >
                Write a Message
              </div>
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("firstName")}
                      className="formControl"
                      placeholder="First Name"
                    />
                    <input
                      {...register("lastName")}
                      className="formControl"
                      placeholder="Last Name"
                    />
                    <textarea
                      {...register("textArea")}
                      className="formControl"
                      placeholder="Drop a message"
                    />
                    <input type="submit" className="btn-submit" />
                  </form>
                  <button onClick={() => setOpen(false)} className="btn-danger">
                    Cancel
                  </button>
                </Box>
              </Fade>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
