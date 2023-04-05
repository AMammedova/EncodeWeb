import React, { useState } from "react";
import style from "./functional.module.css";
const Functional = () => {
  const [clicked, setClicked] = useState(null);
  const handleSpanClick = (index) => {
    setClicked(index);
  };
  return (
    <div className={style.Functional}>
      <h1>funksional</h1>
      <div className={style.HeadContainer}>
        <div className={style.FirstPart}>
          <p
            className={clicked === 1 ? style.active : ""}
            onClick={() => handleSpanClick(1)}
          >
            Anbar
          </p>
          <span></span>
          <p
            className={clicked === 2 ? style.active : ""}
            onClick={() => handleSpanClick(2)}
          >
            Maliyyə <br /> Mühasibat
          </p>
          <span></span>
          <p
            className={clicked === 3 ? style.active : ""}
            onClick={() => handleSpanClick(3)}
          >
            satinalma
          </p>
          <span></span>
          <p
            className={clicked === 4 ? style.active : ""}
            onClick={() => handleSpanClick(4)}
          >
            satiş
          </p>
        </div>
        <div className={style.SecondPart}>
          <p  className={clicked === 5 ? style.active : ""}
            onClick={() => handleSpanClick(5)}>əmək haqqi</p>

          <span></span>
          <p  className={clicked === 6 ? style.active : ""}
            onClick={() => handleSpanClick(6)}>insan resurslari</p>
          <span></span>
         
          <p  className={clicked === 8 ? style.active : ""}
            onClick={() => handleSpanClick(8)}>istehsal</p>
          {/* <span></span> */}
         
        </div>
        <div className={style.SecondPart}>
        

<p  className={clicked === 7 ? style.active : ""}
            onClick={() => handleSpanClick(7)}>
            Qlik BI Hesabatları
          </p>
        </div>
      </div>
    </div>
  );
};

export default Functional;
