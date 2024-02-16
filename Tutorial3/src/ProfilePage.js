import React from "react";
import { useLocation } from "react-router-dom";

function ProfilePage() {
  const location = useLocation();
  const { firstName, lastName, email } = location.state;

  return (
    <div>
      <h1>Profile Page</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default ProfilePage;
