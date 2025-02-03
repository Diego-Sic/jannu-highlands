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
      {/* Wrap the markdown content in a parallax component */}
      <Parallax y={[-20, 20]}>
        <div style={{ padding: "20px" }}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </Parallax>
    </div>
  );
};

export default Slide;
