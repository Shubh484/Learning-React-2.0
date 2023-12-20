import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Book from "./Book";
import { books } from "./books";

const BookList = () => {
  return (
    <>
      <h1 className="title">amazon best seller</h1>
      <section className="booklist">
        {books.map((book, index) => {
          const { img, title, author, id } = book;
          return <Book {...book} key={book.id} number={index} />; // passing entire object
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
