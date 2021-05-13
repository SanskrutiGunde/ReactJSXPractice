//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const name = "Sanskruti Gunde";
const year = new Date().getFullYear();
ReactDOM.render(
  <div>
    {/* It should display 2 paragraph HTML elements. The paragraphs should say:
    Created by YOURNAME. Copyright CURRENTYEAR. E.g. Created by Sanskruti Gunde.
    Copyright 2019. */}
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
