import Main from "./main/Main";
import { Routes, Route } from "react-router-dom";
import Books from "./Books/Books";
import Nazm from "./Nazm/Nazm";
import Maqolalar from "./Maqolalar/Maqolalar";
import Forum from "./Forum/Forum";
import Adiblar from "./main/MainCards/Adiblar";
import { useState } from "react";
import books from "../Books";
import Adabiyotlar from "./main/MainCards/Adabiyotlar";
import Signup from "./Register/Signup/Signup";
import UserProfile from "./profile/UserProfile/UserProfile";
import Settings from "./Register/UserSettings/Settings";

function Auxs() {
  let [userInfo, setUserInfo] = useState({});
  let [eachObj, setEachObj] = useState(books);
  let [adib, setAdib] = useState(books);

  let [javon, setJavon] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Nazm" element={<Nazm />} />
        <Route path="/Maqolalar" element={<Maqolalar />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Adiblar/adib" element={<items />} />
        <Route
          path={`/Adiblar/adib/:id`}
          element={<Adiblar eachObj={eachObj} setAdib={setAdib} />}
        />
        <Route
          path={`/Adiblar/adib/asar/:id`}
          element={
            <Adabiyotlar setJavon={setJavon} javon={javon} adib={adib} />
          }
        />
        <Route
          path={"/user/signup"}
          element={<Signup setUserInfo={setUserInfo} />}
        />
        <Route
          path={"/user/account"}
          element={<Signup setUserInfo={setUserInfo} />}
        />
        <Route
          path={"/user/profile"}
          element={<UserProfile userInfo={userInfo} />}
        />
        <Route
          path={"/user/settings"}
          element={<Settings userInfo={userInfo} setUserInfo={setUserInfo} />}
        />
      </Routes>
    </>
  );
}

export default Auxs;
