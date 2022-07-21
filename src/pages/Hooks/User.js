import React, { useContext } from "react";
import { appContext } from "./Hooks";

export default function User() {
  const { username } = useContext(appContext);
  return (
    <div>
      <p>User {username}</p>
    </div>
  );
}
