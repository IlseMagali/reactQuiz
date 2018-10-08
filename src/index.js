import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

// Defining application data
const authors = [
  {
    name: 'William Shakepeare',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Othello',
      'Romeo and Juliet',
      'Hamlet',
      'The Tempest',
      'Macbeth'
    ]
  },
  {
    name: 'Rosario Castellanos',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Sobre cultura femenina',
      'Mujer que sabe latín',
      'Rito de iniciación',
      'El eterno femenino',
      'Cartas a Ricardo'
    ]
  },
  {
    name: 'Jorge Volpi',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Las guerras y las palabras',
      'Leer la mente. El cerebro y el arte de la ficción',
      'La paz de los sepulcros',
      'Memorial del engaño',
      'In search of Klingsor'
    ]
  },
  {
    name: 'Ángeles Mastretta',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Arráncame la vida',
      'Mujeres de ojos grandes',
      'Ninguna eternidad como la mía',
      'Puerto Libre',
      'El mundo iluminado'
    ]
  },
  {
    name: 'Agatha Christie',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'The Murder of Roger Ackroyd',
      'The Moving Finger',
      'Crooker House',
      'Ordeal by Innocence',
      'Murder on the Orient Express'
    ]
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books)
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);
  return {
    books: fourRandomBooks,
    author: authors.find((author) => author.books.some((title) => title === answer))
  }
}

const state = {
  turnData: {
    author: getTurnData(authors)
  }
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
