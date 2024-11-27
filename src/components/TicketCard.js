import React from "react";
import "../styles/TicketCard.css";

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span>CAM-{ticket.id.split("-")[1]}</span>
        <div className="placeholder-img">
          <div className="placeholderName">a</div>
        </div>
        {/* Placeholder for top-right icon */}
      </div>
      <div className="ticket-title">{ticket.title}</div>
      <div className="ticket-tag">{ticket.tag.join(", ")}</div>
    </div>
  );
}

export default TicketCard;
