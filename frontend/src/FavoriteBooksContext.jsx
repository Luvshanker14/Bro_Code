import React, { createContext, useContext, useState} from 'react';

const FavoriteBooksContext = createContext();

export function useFavoriteBooks() {
  return useContext(FavoriteBooksContext);
}

export function FavoriteBooksProvider({ children }) {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const addFavoriteBook = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  const removeFavoriteBook = (bookId) => {
    setFavoriteBooks(favoriteBooks.filter(book => book._id !== bookId));
  };

  return (
    <FavoriteBooksContext.Provider value={{ favoriteBooks, addFavoriteBook, removeFavoriteBook }}>
      {children}
    </FavoriteBooksContext.Provider>
  );
}
