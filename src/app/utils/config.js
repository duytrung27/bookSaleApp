import axios from "axios";

export default axios.create({
  baseURL: "https://openlibrary.org/", //API in Server
  headers: {
    "Content-type": "application/json",
  },
});
