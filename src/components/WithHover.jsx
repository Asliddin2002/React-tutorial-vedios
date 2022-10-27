import React, { useState } from "react";

const WithHover = (OriginComponents) => {
  const NewComponents = () => {
    const [count, setCount] = useState(0);

    const handleChange = () => {
      setCount(count + 1);
    };
    return <OriginComponents handleChange = {handleChange} count={count}  />;
  };

  return NewComponents;
};

export default WithHover;
