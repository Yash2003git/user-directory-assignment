import React, { createContext, useState, useEffect } from "react";

// 1️⃣ Create the Context
export const UserContext = createContext();

// 2️⃣ Create a Provider Component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users once when app loads
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

  return (
    <UserContext.Provider
      value={{ users, selectedUser, setSelectedUser, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
