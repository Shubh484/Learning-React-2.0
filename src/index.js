import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Jordon Moore",
  title: "Interesting Facts for curious Minds",
  img: "./images/bookCover.jpg",
};

const secondBook = {
  author: "James Clear",
  title: "An easy and proven way to build good habits",
  img: "./images/Book2.jpg",
};

const BookList = () => {
  return (
    <>
      <section className="booklist">
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        />
      </section>
    </>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
