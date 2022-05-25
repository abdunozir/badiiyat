import { useEffect, useState } from "react";
import MainCard from "./MainCards/MainCards";
import MainFilter from "./MainFilter/MainFilter";
import books from "../../Books";
import HeaderBody from "../header/headerBody/HeaderBody";

function Main() {
  const [obj, setObj] = useState(books);
  let [newObj, setNewObj] = useState([]);
  let [filtered, setFiltered] = useState([]);
  useEffect(() => {
    setNewObj([...obj]);
  }, []);
  return (
    <>
      <HeaderBody />
      <MainFilter
        filtered={filtered}
        setFiltered={setFiltered}
        obj={obj}
        setNewObj={setNewObj}
      />
      <MainCard newObj={newObj} setNewObj={setNewObj} />
    </>
  );
}

export default Main;
