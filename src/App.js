import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import "./App.css";

function App() {
  // 🎨 Theme context (dark/light)
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  // 👥 User data states
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // 🔄 Fetch user data when app starts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // 🔍 Filter users by search input
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🧾 Handle loading and error states
  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  // 🧱 UI Rendering
  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <div className="header">
        <h1>User Directory</h1>

        {/* 🌗 Dark/Light Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* 🔍 Search box */}
      {!selectedUser ? (
        <>
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search"
          />

          {/* 👥 User List */}
          <UserList users={filteredUsers} onSelectUser={setSelectedUser} />
        </>
      ) : (
        // 🧍 User Details
        <UserDetail user={selectedUser} onBack={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;
