import React from "react";

function Error({ error }) {
  return (
    <div style={{ padding: 10, color: "red", fontSize: 50 }}>
      Error: {error}
    </div>
  );
}

export default Error;
