import React, { useEffect } from "react";

export default function Child({ returnComment }) {
  useEffect(() => {}, [returnComment]);

  return (
    <>
      <div>{returnComment("Garfield")}</div>
    </>
  );
}
