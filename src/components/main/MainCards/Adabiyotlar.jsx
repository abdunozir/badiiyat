import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Adabiyotlar.scss";
import Navbar from "../../header/navbar/Navbar";

function Adabiyotlar({ adib, javon, setJavon }) {
  let [rotateIcon, setRotateIcon] = React.useState({
    transform: "rotate(90deg)",
    transition: "0.5s",
    backgroundColor: "#191919",
  });
  let [showed, setShowed] = React.useState(true);
  let [show, setShow] = React.useState({
    height: "0px",
    overflow: "hidden",
    transition: "0.6s",
    backgroundColor: "#191919",
  });
  const showMore = () => {
    if (showed) {
      setShowed(false);
      setRotateIcon({
        transform: "rotate(0deg)",
        transition: "0.5s",
        backgroundColor: "#191919",
      });
      setShow({
        height: "auto",
        overflow: "hidden",
        transition: "0.6s",
        backgroundColor: "#191919",
      });
    } else {
      setShowed(true);
      setRotateIcon({
        transform: "rotate(90deg)",
        transition: "0.5s",
        backgroundColor: "#191919",
      });
      setShow({
        height: "0px",
        overflow: "hidden",
        transition: "0.6s",
        backgroundColor: "#191919",
      });
    }
  };

  let adibLocation = useLocation();
  let [isAdded, setIsAdded] = React.useState(true);

  const addBook = (el) => {
    if (isAdded) {
      setJavon([...javon, el]);
      setIsAdded(false);
    }
    console.log(javon);
  };
  return (
    <div>
      <Navbar />
      <div className="book-info">
        {adib.map((el1) => {
          if (el1.id === adibLocation.hash.split("#").at(-1)) {
            return el1.bookObj.map((el) => {
              if (el.bookId === adibLocation.pathname.split("/").at(-1)) {
                return (
                  <div className="book-info__con" key={el.bookId}>
                    <div className="book-info__img">
                      <img
                        src={
                          el.bookImg
                            ? el.bookImg
                            : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                        }
                        alt="kitob muqovasi"
                      />
                    </div>
                    <div className="book-info__texts">
                      <h1 className="book-info__bookName">{el.bookName}</h1>
                      <div className="book-info__author">
                        <Link to={`/Adiblar/adib/${el1.id}`}>
                          {el1.name} {el1.lastName}
                        </Link>
                        |
                        <span>
                          <i className="bx bxs-star"></i>{" "}
                          <span>{el.bookRating}</span>
                        </span>
                      </div>
                      <div className="book-info__details">
                        <p>
                          Sahifalar soni: <span>{el.bookPage}</span>
                        </p>
                        <p>
                          Chop etilgan: <span>{el.published}</span>
                        </p>
                        <p>
                          Janri: <span>{el.bookSenario}</span>
                        </p>
                        <p>
                          Nashriyot: <span>{el.nashriyot}</span>
                        </p>
                      </div>
                      <div className="book-full-info">
                        <div className="toliq-info-btn">
                          <div onClick={showMore}>
                            <p>To'liq ma'lumot</p>
                            <i
                              className="bx bx-down-arrow-alt"
                              style={rotateIcon}
                            ></i>
                          </div>
                        </div>
                        <div className="book-info-body-texts" style={show}>
                          <p>{el.bookInfo}</p>
                          <p>{el.bookInfoTwo}</p>
                        </div>
                      </div>
                      <div className="book-info__book-formats">
                        <p>Mavjud formatlar</p>
                        <div className="book-formats-type">
                          <ul>
                            <li>
                              <span>
                                <i className="bx bx-book-alt"></i>
                              </span>
                              <p>Qog'oz kitob</p>
                              <p>{el.bookPrice}</p>
                            </li>
                            <li>
                              <span>
                                <i className="bx bx-headphone"></i>
                              </span>
                              <p>Audio kitob</p>
                              <p>{el.audioTime}</p>
                            </li>
                            <li>
                              <span>
                                <i className="bx bx-file-blank"></i>
                              </span>
                              <p>electron kitob</p>
                              <p>{el.electron}</p>
                            </li>
                          </ul>
                          <button onClick={() => addBook(el)}>
                            Javonga qo’shish
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            });
          }
        })}
      </div>
    </div>
  );
}

export default Adabiyotlar;
