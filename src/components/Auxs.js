import Navbar from "./header/navbar/Navbar";
import Main from "./main/Main";
import { Routes, Route } from "react-router-dom";
import Nasr from "./Nasr/Nasr";
import Nazm from "./Nazm/Nazm";
import Maqolalar from "./Maqolalar/Maqolalar";
import Forum from "./Forum/Forum";
import Adiblar from "./main/MainCards/Adiblar";
import { useState } from "react";
import books from "../Books";
import Adabiyotlar from "./main/MainCards/Adabiyotlar";

function Auxs() {
  let [eachObj, setEachObj] = useState(books);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Nasr" element={<Nasr />} />
        <Route path="/Nazm" element={<Nazm />} />
        <Route path="/Maqolalar" element={<Maqolalar />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Adiblar/adib" element={<items />} />
        <Route
          path={`/Adiblar/adib/:id`}
          element={<Adiblar eachObj={eachObj} />}
        />
        <Route
          path={`/Adiblar/adib/asar/:id`}
          element={<Adabiyotlar eachObj={eachObj} />}
        />
      </Routes>
    </>
  );
}

export default Auxs;
