import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";
import TicketBoard from "./components/TicketBoard";
import display from "./components/images/Display.svg";
import down from "./components/images/down.svg";
function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const [onopen, setOnopen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      setTickets(response.data.tickets);
      setUsers(response.data.users);
    }
    fetchData();
  }, []);

  return (
    <div className="app-container">
      {/* Top White Bar */}
      <div className="top-bar">
        <div className="dropdown">
          <button
            className="dropdown-button"
            onClick={() => {
              setOnopen(!onopen);
            }}
          >
            <img src={display}></img>
            <span>Display</span> {/* Placeholder for the Display icon */}
            <img src={down} className="down-arrow"></img>
          </button>
          {onopen && (
            <div className="dropdown-content">
              <div>
                <div style={{ marginBottom: "1rem" }}>Grouping</div>
                <div>Ordering</div>
              </div>

              <div>
                <select
                  className="submenu-content"
                  onChange={(e) => setGrouping(e.target.value)}
                  style={{ marginBottom: "1rem" }}
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>

                <select
                  className="submenu-content"
                  onChange={(e) => setOrdering(e.target.value)}
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Kanban Board */}
      <div className="kanban-board">
        <TicketBoard
          tickets={tickets}
          users={users}
          grouping={grouping}
          ordering={ordering}
        />
      </div>
    </div>
  );
}

export default App;
