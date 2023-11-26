import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./Component";

const myFirstElement = <h1>Hello React!</h1>;

let name = "there";
const mySecondElement = <h2> Hi {name} ! </h2>;

<> This is a fragment </>;

let color = "blue";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {myFirstElement}
    {mySecondElement}
    <Component color={color} />
  </>
);
