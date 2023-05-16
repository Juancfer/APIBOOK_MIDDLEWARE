import "./App.css";
import React from "react";

function App() {
  const apiUrl = "";
  const [books, setBooks] = React.useState();

  React.useEffect(() => {
    fetch(apiUrl)
      .then((books) => books.json())
      .then((booksParsed) => setBooks(booksParsed));
  }, []);

  return (
    <div className="App">
      <h2>Listado de libros:</h2>
      <ul>
        {books?.data?.map((book) => (
          <li key={book._id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;