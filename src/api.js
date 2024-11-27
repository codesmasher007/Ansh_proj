// import React, { useEffect, useState } from "react";
// import KanbanBoard from "./KanbanBoard";
// import "./App.css";

// function App() {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [groupBy, setGroupBy] = useState("status"); // Default grouping
//   const [sortBy, setSortBy] = useState("priority"); // Default sorting

//   useEffect(() => {
//     // Fetch data from the API
//     fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
//       .then((response) => response.json())
//       .then((data) => {
//         setTickets(data.tickets || []);
//         setUsers(data.users || []);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="app">
//       <div className="controls">
//         <button onClick={() => setGroupBy("status")}>Group by Status</button>
//         <button onClick={() => setGroupBy("user")}>Group by User</button>
//         <button onClick={() => setGroupBy("priority")}>
//           Group by Priority
//         </button>

//         <button onClick={() => setSortBy("priority")}>Sort by Priority</button>
//         <button onClick={() => setSortBy("title")}>Sort by Title</button>
//       </div>

//       <KanbanBoard
//         tickets={tickets}
//         users={users}
//         groupBy={groupBy}
//         sortBy={sortBy}
//       />
//     </div>
//   );
// }

// export default App;
