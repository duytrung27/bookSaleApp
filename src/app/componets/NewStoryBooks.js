import BookCard from "./BookCard";
import ListSkeletonBook from "./ListSkeletonBook";

const NewStoryBooks = ({ bookList, isLoading }) => {
  return (
    <div>
      <h2 className="text-[25px] font-bold capitalize">The new story</h2>
      {isLoading ? (
        <ListSkeletonBook />
      ) : (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bookList.slice(0, 6).map((book, idx) => (
            <BookCard book={book} key={idx} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewStoryBooks;
