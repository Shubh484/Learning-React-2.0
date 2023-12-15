import React from "react";
import ReactDom from "react-dom/client";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Shubh Singh</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Greeting />);
