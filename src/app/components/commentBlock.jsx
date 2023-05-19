'use client'
import React, {useState} from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import Link from "next/link";

const CommentBlock = (props) => {
    const [showMore, setShowMore] = useState(false)

    const handleClick = () => {
        setShowMore(!showMore)
    }

    const renderText = () => {
        if (showMore) {
          return (
            <>
              <p className="leading-relaxed">{props.showMore}</p>
              <button onClick={handleClick} className="text-indigo-400 flex">
                Show less <RxCaretUp size='1.3rem' />
              </button>
            </>
          );
        } else {
          return (
            <>
              <p className="leading-relaxed">{props.showLess}</p>
              <button onClick={handleClick} className="text-indigo-400 flex">
                Show more <RxCaretDown size='1.3rem'/>
              </button>
            </>
          );
        }
      };
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <div className="inline-flex items-center">
                <img
                  alt={props.alt}
                  src={props.src}
                  className="h-32 w-32 rounded-full flex-shrink-0 object-cover object-center"
                />
              </div>
            </div>

            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2 primary_font">
                {props.name}
              </h2>
              <p className="leading-relaxed">{props.comments}</p>
              <div>
              {renderText()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentBlock;
