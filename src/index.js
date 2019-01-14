import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div>
      Hello <strong>your name!</strong>
      <h1>Heading</h1>
      {5 + 10}
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
