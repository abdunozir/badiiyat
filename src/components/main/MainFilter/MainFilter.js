import { useState } from "react";

function MainFilter({ obj, setObj, books, filterIds, setFilterText }) {
  let [li1, setLi1] = useState("#fff");
  let [li2, setLi2] = useState("SlateGray");
  let [li3, setLi3] = useState("SlateGray");
  let [li4, setLi4] = useState("SlateGray");

  const checkedFliterHandler = (e) => {
    console.log(e.target.id);
    if (e.target.id === "Barcha yozuvchilar") {
      setObj(books);
    } else if (e.target.id === "Barcha kitoblar") {
      setFilterText("barchasi");
    }
    setLi1("#fff");
    setLi2("SlateGray");
    setLi3("SlateGray");
    setLi4("SlateGray");
  };
  const checkedFliterHandler2 = (e) => {
    if (e.target.id === "Diniy") {
      setObj(books.filter((el) => el.genre === "Diniy"));
    } else if (e.target.id === "Diniy kitoblar") {
      setFilterText("Diniy");
    }
    setLi1("SlateGray");
    setLi2("#fff");
    setLi3("SlateGray");
    setLi4("SlateGray");
  };

  const checkedFliterHandler3 = (e) => {
    if (e.target.id === "Bizness") {
      setObj(books.filter((el) => el.genre === "biznes"));
    } else if (e.target.id === "Bizness kitoblar") {
      setFilterText("biznes");
    }
    setLi1("SlateGray");
    setLi2("SlateGray");
    setLi3("#fff");
    setLi4("SlateGray");
  };
  const checkedFliterHandler4 = (e) => {
    if (e.target.id === "Jahon") {
      setObj(books.filter((el) => el.genre === "jahon"));
    } else if (e.target.id === "Jahon kitoblar") {
      setFilterText("jahon");
    }
    setLi1("SlateGray");
    setLi2("SlateGray");
    setLi3("SlateGray");
    setLi4("#fff");
  };

  return (
    <div className="Main-filter">
      <h1 className="Main-filter__title">Asosiy kategoriyalar</h1>
      <ul>
        <li
          style={{ color: li1 }}
          id={filterIds[0]}
          onClick={checkedFliterHandler}
        >
          {filterIds[0]}
        </li>
        <li
          style={{ color: li2 }}
          id={filterIds[1]}
          onClick={checkedFliterHandler2}
        >
          {filterIds[1]}
        </li>
        <li
          style={{ color: li3 }}
          id={filterIds[2]}
          onClick={checkedFliterHandler3}
        >
          {filterIds[2]}
        </li>
        <li
          style={{ color: li4 }}
          id={filterIds[3]}
          onClick={checkedFliterHandler4}
        >
          {filterIds[3]}
        </li>
      </ul>
    </div>
  );
}

export default MainFilter;
