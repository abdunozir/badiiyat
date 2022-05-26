import React from "react";
import { useNavigate } from "react-router-dom";
//scss
import "./Settings.scss";
//images

let inputvalue = {};
export default function Settings({ setUserInfo, userInfo }) {
  console.log(userInfo);
  let navigate = useNavigate();
  let inputvalueHandlerBtn = (e) => {
    e.preventDefault();
    setUserInfo({ ...inputvalue });
    navigate("/user/profile");
  };

  function inputValueHandler(e) {
    if (e.target.name === "firstname") {
      inputvalue[e.target.name] = e.target.value;
    }
    if (e.target.name === "lastname") {
      inputvalue[e.target.name] = e.target.value;
    }
    if (e.target.name === "phone") {
      inputvalue[e.target.name] = e.target.value;
    }
    if (e.target.name === "email") {
      inputvalue[e.target.name] = e.target.value;
    }
    if (e.target.name === "password") {
      inputvalue[e.target.name] = e.target.value;
    }
  }
  return (
    <section className="settings">
      <div className="container">
        <div className="d-flex">
          <div className="settings__leftbox">
            <div className="settings__imgbox">
              <img
                className="settings__img"
                src={"https://source.unsplash.com/random"}
                alt=""
              />
            </div>
            <span className="settings__ph d-flex align-items-center justify-content-center">
              <i className="bx bx-camera"></i>
            </span>
          </div>
          <div className="settings__rightbox ">
            <h2 className="settings__title">My profile</h2>

            <form className="d-flex flex-column col-12" action="">
              <label className="settings__label" htmlFor="">
                <span className="settings__name">First Name</span>
                <input
                  className="settings__input"
                  id="setname"
                  type="text"
                  name="firstname"
                  onChange={inputValueHandler}
                  defaultValue={userInfo.firstname}
                />
                <span className="settings__desc">
                  Please enter your first name.
                </span>
              </label>
              <label className="settings__label" htmlFor="setlname">
                <span className="settings__name">Last Name</span>
                <input
                  className="settings__input"
                  id="setlname"
                  type="text"
                  name="lastname"
                  onChange={inputValueHandler}
                  defaultValue={userInfo.lastname}
                />
                <span className="settings__desc">
                  Please enter your last name.
                </span>
              </label>
              <div className="settings__box d-flex align-items-center justify-content-between">
                <label className="settings__label col-5" htmlFor="setnumber">
                  <span className="settings__name">Phone</span>
                  <input
                    className="settings__input settings__in"
                    id="setnumber"
                    type="text"
                    name="phone"
                    onChange={inputValueHandler}
                    defaultValue={userInfo.phone}
                  />
                  <span className="settings__desc">
                    Please enter your phone number.
                  </span>
                </label>
                <label className="settings__label col-6" htmlFor="setmail">
                  <span className="settings__name">Email</span>
                  <input
                    className="settings__input settings__in"
                    id="setmail"
                    type="text"
                    name="email"
                    onChange={inputValueHandler}
                    defaultValue={userInfo.email}
                  />
                  <span className="settings__desc">
                    Please enter your email address.
                  </span>
                </label>
              </div>

              <hr className="settings__hr" />

              <div className="d-flex justify-content-end">
                <button
                  onClick={inputvalueHandlerBtn}
                  className="settings__btn"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
