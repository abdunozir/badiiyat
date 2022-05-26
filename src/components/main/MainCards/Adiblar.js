import { useLocation, Link } from "react-router-dom";
import Navbar from "../../header/navbar/Navbar";
import "./Adiblar.scss";
function Adiblar({ eachObj }) {
  let location = useLocation();

  return (
    <div>
      <Navbar />
      <div className="adiblar-Info">
        {eachObj.map((el) => {
          if (el.id === location.pathname.split("/").at(-1)) {
            return (
              <div className="adiblar-info__container" key={el.id}>
                <div className="adiblar-info__adib-img">
                  <div className="adib-img">
                    <img src={el.img} alt="" />
                  </div>
                  <p>Tavallud va qazo sanasi !</p>
                  <h1>
                    {el.born} - {el.died}
                  </h1>
                </div>
                <div className="adiblar-info__info-text">
                  <h1>{el.name}</h1>
                  <p>{el.desc}</p>
                  <div className="adib-Ijodi">
                    <h1 className="marked">
                      <i className="bx bxs-bookmark"></i>
                      <span>Ijodi</span>
                    </h1>
                    <p>{el.jobs}</p>
                  </div>
                  <div className="adiblar-info__asarlari">
                    {el.bookObj.map((book) => {
                      return (
                        <Link
                          to={`/Adiblar/adib/asar/${book.bookId}#${el.id}`}
                          key={book.bookId}
                        >
                          <div className="each__object">
                            <div className="object__img">
                              <img alt="rasmla" src={book.bookImg} />
                            </div>
                            <h4 className="object__name">{book.bookName}</h4>
                            <p className="object__years">{book.year}</p>
                            <div className="object__diflex">
                              <p className="object__counts">
                                <i className="bx bxs-book-alt"></i>
                                {book.bookPage}
                              </p>
                              <p className="object__counts">
                                <i className="bx bx-headphone"></i>
                                {book.audioTime.split(" ")[0]}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Adiblar;
