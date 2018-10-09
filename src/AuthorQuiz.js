import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";

function Header() {
  return (
    <div className="jumbotron">
      <h1> Author Quiz </h1>
      <p>Select the book written by the author shown</p>
    </div>
  );
}

function Book({ title }) {
  console.log('Book component', {title});
  return (
    <div className="answer">
      <h4>{title}</h4>
   </div>
  );
}

function Turn({author}) {
  console.log('author', {author})
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {author.books.map(title => (
          <Book title={title} key={title} />
        ))}
      </div>
    </div>
  );
}

function Continue() {
  return <button />;
}

function Footer() {
  return (
    <div className="row">
      <p className="text-muted credit">
        All images are from{" "}
        <a href="https://commons.wikimedia.org/wiki/Main_Page">
          Wikimedia Commons
        </a>
      </p>
    </div>
  );
}

function AuthorQuiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Header />
      <Turn {...turnData} className="turn" />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
