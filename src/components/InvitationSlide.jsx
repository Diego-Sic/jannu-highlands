// InvitationSlide.js
import React from "react";

const InvitationSlide = ({ onAccept, onDecline }) => {
  return (
    <div
      className="slide"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
      }}
    >
      <h2>Invitation</h2>
      <p>Please accept or decline the invitation.</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={onAccept} style={{ marginRight: "10px" }}>
          Accept
        </button>
        <button onClick={onDecline}>Decline</button>
      </div>
    </div>
  );
};

export default InvitationSlide;
