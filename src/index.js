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
        >
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
            amet vehicula tellus. Morbi nisl lorem, maximus et semper et, dictum
            non erat. Curabitur ac libero est. Nullam est enim, consectetur ac
            sodales non, malesuada non diam. Proin quis vehicula arcu.
          </p>
        </Book>

        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        />
      </section>
    </>
  );
};

const Book = ({ img, title, author, children }) => {
  // Multiple approaches to use props
  // console.log(props);
  // const {img,title,author} = props;  // Multiple approaches to use props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
