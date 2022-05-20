import { useState } from "react";

function MainFilter() {
  let [li1, setLi1] = useState("#fff");
  let [li2, setLi2] = useState("SlateGray");
  let [li3, setLi3] = useState("SlateGray");
  let [li4, setLi4] = useState("SlateGray");

  const checkedFliterHandler = (e) => {
    setLi1("#fff");
    setLi2("SlateGray");
    setLi3("SlateGray");
    setLi4("SlateGray");
  };
  const checkedFliterHandler2 = (e) => {
    setLi1("SlateGray");
    setLi2("#fff");
    setLi3("SlateGray");
    setLi4("SlateGray");
  };

  const checkedFliterHandler3 = (e) => {
    setLi1("SlateGray");
    setLi2("SlateGray");
    setLi3("#fff");
    setLi4("SlateGray");
  };
  const checkedFliterHandler4 = (e) => {
    setLi1("SlateGray");
    setLi2("SlateGray");
    setLi3("SlateGray");
    setLi4("#fff");
  };

  return (
    <div className="Main-filter">
      <h1 className="Main-filter__title">Asosiy kategoriyalar</h1>
      <ul>
        <li style={{ color: li1 }} onClick={checkedFliterHandler}>
          Temuriylar davri
        </li>
        <li style={{ color: li2 }} onClick={checkedFliterHandler2}>
          Jadid adabiyoti
        </li>
        <li style={{ color: li3 }} onClick={checkedFliterHandler3}>
          Sovet davri
        </li>
        <li style={{ color: li4 }} onClick={checkedFliterHandler4}>
          Mustaqillik davri
        </li>
      </ul>
    </div>
  );
}

export default MainFilter;
