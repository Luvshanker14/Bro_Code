import React, { createContext, useState, useContext } from 'react';

const FavoriteBooksContext = createContext();

export const useFavoriteBooks = () => useContext(FavoriteBooksContext);

export const FavoriteBooksProvider = ({ children }) => {
   const [favoriteBooks, setFavoriteBooks] = useState([]);
  const addFavoriteBook = (book) => {

    if(!favoriteBooks.includes(book))
      setFavoriteBooks([...favoriteBooks, book]);
  };

  const removeFavoriteBook = (book) => {
    setFavoriteBooks(favoriteBooks.filter((b) => b.id !== book.id));
  };

  return (
    <FavoriteBooksContext.Provider value={{ favoriteBooks, addFavoriteBook, removeFavoriteBook }}>
      {children}
    </FavoriteBooksContext.Provider>
  );
};