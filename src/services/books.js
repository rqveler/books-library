import axios from "axios";

export const getAll = () =>
  axios
    .get("http://localhost:3006/books")
    .then(response => response.data)
    .catch(error => console.error("axios error", error));

export const update = book =>
  axios
    .put(`http://localhost:3006/books/${book.id}`, book)
    .then(response => {
      console.log(book);
      return response;
    })
    .catch(error => console.error("axios update error", error));
