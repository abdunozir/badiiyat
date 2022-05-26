import { Link } from "react-router-dom";
import "./BookCard.scss";
function BooksCard({ el, filterText }) {
  return (
    <>
      {el.bookObj.map((book) => {
        if (book.bookGenre === filterText || filterText === "barchasi") {
          console.log(book);
          return (
            <Link
              to={`/Adiblar/adib/asar/${book.bookId}#${el.id}`}
              key={book.bookId}
            >
              <div className="each__object-book" id={book.bookId}>
                <div className="object-book__img">
                  <img alt="rasmla" src={book.bookImg} />
                </div>
                <h4 className="object__name">{book.bookName}</h4>
                <div className="object__diflex">
                  <p className="object__counts">
                    <i className="bx bxs-book-alt"></i>
                    {book.bookPage}
                  </p>
                  <p className="object__counts">
                    <i className="bx bx-headphone"></i> {book.audioTime}
                  </p>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </>
  );
}

export default BooksCard;
