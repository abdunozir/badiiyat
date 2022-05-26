import { useEffect, useState } from "react";
import MainCard from "./MainCards/MainCards";
import MainFilter from "./MainFilter/MainFilter";
import books from "../../Books";
import HeaderSearch from "./MainCards/SearchInput/HeaderSearch";
import HeaderBody from "../header/headerBody/HeaderBody";
import Navbar from "../header/navbar/Navbar";

function Main() {
  let [obj, setObj] = useState(books);
  let [newObj, setNewObj] = useState([]);
  let [filterIds, setFilterIds] = useState([
    "Barcha yozuvchilar",
    "Diniy",
    "Bizness",
    "Jahon",
  ]);
  useEffect(() => {
    setNewObj([...obj]);
  }, [obj]);
  return (
    <>
      <Navbar />
      <HeaderBody />
      <HeaderSearch />
      <MainFilter
        obj={obj}
        setObj={setObj}
        books={books}
        filterIds={filterIds}
      />
      <MainCard newObj={newObj} setNewObj={setNewObj} />
    </>
  );
}

export default Main;
