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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/81uXd9NNVbL._AC_UL900_SR900,600_.jpg"
    alt="The Magic (Tamil)"
  />
);
const Title = () => <h2>The Magic (Tamil)</h2>;
const Author = () => {
  return <h4>Rhonda Byrne</h4>;
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
