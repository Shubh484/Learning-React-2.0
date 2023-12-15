import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <>
      <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </>
  );
};

const author = "Jordon Moore";
const Book = () => {
  const title = "Interesting Facts for Curious Mindssss";
  return (
    <article className="book">
      <img src="./images/bookCover.jpg" alt="curious mind" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
