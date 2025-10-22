import React from "react";

export default function UserList({ users, onSelectUser }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div
          key={user.id}
          className="user-card"
          onClick={() => onSelectUser(user)}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.company.name}</p>
        </div>
      ))}
    </div>
  );
}
