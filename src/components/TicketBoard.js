import React from "react";
import "../styles/TicketBoard.css";
import TicketCard from "./TicketCard";
import backlog from "./images/Backlog.svg";

import todo from "./images/To-do.svg";
import inProgress from "./images/in-progress.svg";
import done from "./images/Done.svg";
import canceled from "./images/Cancelled.svg";
import nopriority from "./images/No-priority.svg";
import lowPriority from "./images/Img - Low Priority.svg";
import urgent from "./images/SVG - Urgent Priority colour.svg";
import high from "./images/Img - High Priority.svg";
import medium from "./images/Img - Medium Priority.svg";

const groupByOptions = {
  status: ["Backlog", "Todo", "In progress", "Done", "Canceled"],
  user: ["usr-1", "usr-2", "usr-3", "usr-4", "usr-5"],
  priority: ["No priority", "Low", "Medium", "High", "Urgent"],
  Icons: [backlog, todo, inProgress, done, canceled],
  priorityIcons: [nopriority, lowPriority, medium, high, urgent],
};

const userNames = {
  "usr-1": "Anoop Sharma",
  "usr-2": "Yogesh",
  "usr-3": "Shankar Kumar",
  "usr-4": "Ramesh",
  "usr-5": "Suresh",
};

const priorityLevels = {
  0: "No priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

function TicketBoard({ tickets, users, grouping, ordering }) {
  const groupedTickets = tickets.reduce((acc, ticket) => {
    let key;
    if (grouping === "status") {
      key = ticket.status;
    } else if (grouping === "user") {
      key = ticket.userId;
    } else if (grouping === "priority") {
      key = priorityLevels[ticket.priority];
    }
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});

  if (ordering === "priority") {
    Object.values(groupedTickets).forEach((group) =>
      group.sort((a, b) => b.priority - a.priority)
    );
  } else if (ordering === "title") {
    Object.values(groupedTickets).forEach((group) =>
      group.sort((a, b) => a.title.localeCompare(b.title))
    );
  }

  return (
    <div className="ticket-board">
      {groupByOptions[grouping].map((groupKey, index) => (
        <div className="ticket-column" key={groupKey}>
          <div className="column-header">
            <span className="column-icon">
              {grouping === "status" && (
                <img
                  src={grouping === "status" ? groupByOptions.Icons[index] : ""}
                  alt={groupKey}
                />
              )}
            </span>
            <span className="column-icon">
              {grouping === "priority" && (
                <img
                  src={
                    grouping === "priority"
                      ? groupByOptions.priorityIcons[index]
                      : ""
                  }
                  alt={groupKey}
                />
              )}
            </span>
            <div className="action-number">
              {" "}
              <div> {grouping === "user" ? userNames[groupKey] : groupKey}</div>
              <div style={{ fontWeight: "300" }}>
                {groupedTickets[groupKey]?.length || 0}
              </div>
            </div>

            <span className="column-actions">...</span>
          </div>
          <div className="ticket-list">
            {groupedTickets[groupKey]?.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TicketBoard;
