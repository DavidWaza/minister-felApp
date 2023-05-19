"use client";

import { useForm } from "react-hook-form";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Form() {
  const { register, handleSubmit, watch } = useForm();
  const [commentDetails, setCommentDetails] = useLocalStorage(
    "commentDetails",
    []
  );
  const onSubmit = (data) => setCommentDetails((current) => [...current, data]);

  const firstName = watch("firstName");
  return (
    <>
    <div className="w-full grid gap-4 mt-2">
      {commentDetails.map((comment, index) => {
        return (
          <div key={index} className="border-2 border-black w-1/3 p-4 mr-1">
            Name: {comment?.firstName + " " + comment?.lastName}
            <br />
            Comment: {comment?.textArea}
          </div>
        );
      })}</div>
      <div className="flex p-6 align-middle justify-center">
        {/* <p>{firstName}</p> */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName")}
            className="formControl"
            placeholder="First Name"
          />
          <p>{firstName}</p>
          <input
            {...register("lastName")}
            className="formControl"
            placeholder="Last Name"
          />
          <textarea
            {...register("textArea")}
            className="formControl"
            placeholder="drop a message"
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
