import { useEffect, useState } from "react";
import bgSlider_img from "../../../../assets/images/bgslider.png";

function HeaderSlider() {
  let [moveSlide, setMoveSlide] = useState("");

  const moveSlider = (e) => {
    if (e.target.id === "btn1") {
      setMoveSlide("0px");
      console.log("heloo slider");
    } else if (e.target.id === "btn2") {
      setMoveSlide("-1200px");
    } else if (e.target.id === "btn3") {
      setMoveSlide("-2400px");
    } else if (e.target.id === "btn4") {
      setMoveSlide("-3600px");
    }
  };
  return (
    <div className="HeaderBody__slider-wrapper">
      <div className="HeaderBody-slider-wrapper__con">
        <button
          onClick={moveSlider}
          id="btn1"
          className="HeaderBody-slider-wrapper__con-btn"
        ></button>
        <button
          onClick={moveSlider}
          id="btn2"
          className="HeaderBody-slider-wrapper__con-btn"
        ></button>
        <button
          onClick={moveSlider}
          id="btn3"
          className="HeaderBody-slider-wrapper__con-btn"
        ></button>
        <button
          onClick={moveSlider}
          id="btn4"
          className="HeaderBody-slider-wrapper__con-btn"
        ></button>
      </div>
      <div className="HeaderBody__slider-container">
        <div
          className="slider-container__slide"
          style={{ transform: `translate(${moveSlide})` }}
        >
          <div className="slider-container-slide__image">
            <img src={bgSlider_img} alt="" />
            <h1 className="slider-container-slide-image__title">
              Temuriylar davri adabiyoti
            </h1>
          </div>
          <div className="slider-container-slide__image">
            <img src={bgSlider_img} alt="" />
            <h1 className="slider-container-slide-image__title">
              Jadidlar davri adabiyoti
            </h1>
          </div>
          <div className="slider-container-slide__image">
            <img src={bgSlider_img} alt="" />
            <h1 className="slider-container-slide-image__title">
              Sovet davri adabiyoti
            </h1>
          </div>
          <div className="slider-container-slide__image">
            <img src={bgSlider_img} alt="" />
            <h1 className="slider-container-slide-image__title">
              Mustaqillik davri adabiyoti
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlider;
