export const convertBookData = (book) => {
  const imageCover = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
    : "";

  return {
    title: book?.title,
    image: imageCover,
    pulishYear: book.first_publish_year || "unknow",
    author: book?.authors?.length > 0 ? book.authors[0].name : "unknow",
  };
};
