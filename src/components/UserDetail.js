import React from "react";

export default function UserDetail({ user, onBack }) {
  return (
    <div className="user-detail">
      <button onClick={onBack}>⬅ Back</button>
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
    </div>
  );
}
