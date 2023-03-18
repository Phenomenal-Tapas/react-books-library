import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../styles/Library.css";

const Library = () => {
  const [inputVal, setInputVal] = useState("");
  const [books, setBooks] = useState([]);

  const API_KEY = "AIzaSyAx0chRglu-Ajnv3cfhiJwkxY1Z_Zopxok";

  const handleSearchBook = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${inputVal}&key=${API_KEY}&maxResults=40`
      )
      .then((response) => setBooks(response.data.items))
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="app__library-header">
        <div className="library-header">
          <h1>Library</h1>
        </div>
        <div className="library-search">
          <h3>Find Books</h3>
          <div className="search">
            <form onSubmit={handleSearchBook}>
              <input
                type="text"
                placeholder="Enter Book Name"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="app__card-container">{<Card book={books} />}</div>
    </>
  );
};

export default Library;
