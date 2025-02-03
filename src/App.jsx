import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Slide from "./components/Slide";
import InvitationSlide from "./components/InvitationSlide";
import { slidesData } from "./static/slidesData.js";
import { useState } from "react";

function App() {
  // New state: accepted is initially false
  const [accepted, setAccepted] = useState(false);

  // Update the handler so that on accept, we update the state.
  const handleAccept = () => {
    console.log("Invitation accepted");
    setAccepted(true);
  };

  const handleDecline = () => {
    console.log("Invitation declined");
    // Handle the decline action as needed.
  };

  // If accepted, render a simple component with the new text.
  if (accepted) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          Send this song to Diego, so he knows you accepted:
          <iframe
            src="https://open.spotify.com/embed/track/1jlKdNbOA90rjnt88GJnwO?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }

  // Otherwise, render the slide show with the invitation at the end.
  return (
    <ParallaxProvider>
      <div
        className="slides-container"
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        {slidesData.map((content, index) => (
          <Slide key={index} content={content} />
        ))}
        <InvitationSlide onAccept={handleAccept} onDecline={handleDecline} />
      </div>
    </ParallaxProvider>
  );
}

export default App;
