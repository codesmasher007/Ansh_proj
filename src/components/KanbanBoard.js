import React from "react";
import TicketCard from "./TicketCard";
import "../styles/KanbanBoard.css";

function KanbanBoard({ tickets, users, groupBy, sortBy }) {
  const getGroupedTickets = () => {
    // Grouping logic based on the `groupBy` value
    let grouped = {};
    if (groupBy === "status") {
      grouped = tickets.reduce((acc, ticket) => {
        (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "user") {
      grouped = tickets.reduce((acc, ticket) => {
        const userName =
          users.find((user) => user.id === ticket.userId)?.name ||
          "Unknown User";
        (acc[userName] = acc[userName] || []).push(ticket);
        return acc;
      }, {});
    } else if (groupBy === "priority") {
      grouped = tickets.reduce((acc, ticket) => {
        const priorityLabel = [
          "No Priority",
          "Low",
          "Medium",
          "High",
          "Urgent",
        ][ticket.priority];
        (acc[priorityLabel] = acc[priorityLabel] || []).push(ticket);
        return acc;
      }, {});
    }
    return grouped;
  };

  const getSortedTickets = (ticketsList) => {
    if (sortBy === "priority") {
      return [...ticketsList].sort((a, b) => b.priority - a.priority);
    } else if (sortBy === "title") {
      return [...ticketsList].sort((a, b) => a.title.localeCompare(b.title));
    }
    return ticketsList;
  };

  const groupedTickets = getGroupedTickets();

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          <div className="tickets-container">
            {getSortedTickets(groupedTickets[group]).map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
