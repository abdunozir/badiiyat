import { useEffect, useState } from "react";
import "../../assets/sass/Bolcks/Books/Books.scss";
import HeaderBody from "../header/headerBody/HeaderBody";
import BooksCard from "./BooksCard";
import HeaderSearch from "../main/MainCards/SearchInput/HeaderSearch";
import MainFilter from "../main/MainFilter/MainFilter";
import books from "../../Books";
import Navbar from "../header/navbar/Navbar";

function Nasr() {
  let [filterText, setFilterText] = useState("barchasi");
  let [filterIds, setFilterIds] = useState([
    "Barcha kitoblar",
    "Diniy kitoblar",
    "Bizness kitoblar",
    "Jahon kitoblar",
  ]);

  let [obj, setObj] = useState(books);
  let [newObj, setNewObj] = useState([]);

  useEffect(() => {
    setNewObj(obj);
  }, [obj, filterText]);

  return (
    <div>
      <Navbar />
      <div className="Books">
        <HeaderBody />
        <HeaderSearch />
        <MainFilter
          filterIds={filterIds}
          setObj={setObj}
          setNewObj={setNewObj}
          setFilterText={setFilterText}
        />
        <div className="MainCard-container">
          {newObj.map((el) => {
            return <BooksCard el={el} filterText={filterText} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Nasr;
