import React, { useState } from "react";
import WithHover from "./WithHover";

const HoverEvent = ({ handleChange, count }) => {

  return (
    <div onMouseLeave={handleChange}>
      hover
      {count} times
    </div>
  );
};

export default WithHover(HoverEvent);
