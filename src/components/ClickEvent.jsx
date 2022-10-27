import React, { useState } from "react";
import WithHover from "./WithHover";

const ClickEvent = ({handleChange, count}) => {
  
  return (
    <div>
      <button onClick={handleChange}>Click {count} times</button>
    </div>
  );
};

export default WithHover(ClickEvent);
