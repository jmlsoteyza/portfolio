import React from "react";
import "../../Styles/gradient.css";

const HomeSideLines = ({props, currentColor}) => {
  

  return (
    <>
      <svg
        className="top-left-line svg-lines"
        width={300}
        height={300}
        {...props}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset={0}
              style={{
                stopColor: currentColor.grad1,
              }}
            />
            <stop
              offset={0.5}
              style={{
                stopColor: currentColor.grad2,
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: currentColor.grad1,
              }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url('#grad1')"
          d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
        />
      </svg>
      <svg
        className="bottom-right-line svg-lines"
        width={300}
        height={300}
        {...props}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset={0}
              style={{
                stopColor: currentColor.grad1,
              }}
            />
            <stop
              offset={0.5}
              style={{
                stopColor: currentColor.grad2,
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: currentColor.grad1,
              }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url('#grad1')"
          d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
        />
      </svg>
    </>
  );
};

export default HomeSideLines;
