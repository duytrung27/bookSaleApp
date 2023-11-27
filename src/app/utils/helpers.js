export const convertBookData = (book) => {
  const imageCover = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
    : "";

  return {
    title: book?.title,
    image: imageCover,
    pulishYear: book.first_publish_year || "unknow",
    author: book?.authors?.length > 0 ? book.authors[0].name : "unknow",
    id: book?.key,
  };
};

export const convertSearchBookData = (book) => {
  const imageCover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "";

  return {
    title: book?.title,
    image: imageCover,
    pulishYear: book.first_publish_year || "unknow",
    author: book?.author_name?.length > 0 ? book.author_name[0] : "unknow",
    id: book?.key,
  };
};

export const convertBookDeail = (book) => {
  const {
    description,
    title,
    covers,
    subject_places,
    subject_times,
    subjects,
  } = book;

  let descrip = "No description found";

  if (typeof description === "string") {
    descrip = description;
  } else if (typeof description === "object") {
    descrip = description.value;
  }

  return {
    description: descrip,
    title: title,
    image: covers
      ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
      : "",
    subjectPlaces: subject_places
      ? subject_places.join(", ")
      : "No subject places found",
    subjectTimes: subject_times
      ? subject_times.join(", ")
      : "No subject times found",
    subjects: subjects ? subjects.join(", ") : "No subjects found",
  };
};
