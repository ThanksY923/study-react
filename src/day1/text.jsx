import React, { forwardRef } from "react";

const Hello = forwardRef(function (props, ref) {
  return <h1 ref={ref}>Hello World</h1>;
});

export default Hello;
