// Slide.js
import React from "react";
import ReactMarkdown from "react-markdown";
import { Parallax } from "react-scroll-parallax";

const Slide = ({ content }) => {
  return (
    <div
      className="slide"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        position: "relative",
      }}
    >
      <Parallax y={[-20, 20]}>
        <ReactMarkdown
          components={{
            // Override the default rendering of <a> tags
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Parallax>
    </div>
  );
};

export default Slide;
