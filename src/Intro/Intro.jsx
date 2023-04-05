import React from "react";
import style from "./intro.module.css";
const Intro = () => {
  return (
    <div className={style.Intro}>
      <img className={style.Drop} src="/images/drop.svg" alt="" />
      <div className={style.IntroLeft}>
        <h1>
          Encode ERP – biznesinizi düzgün, asan və rahat idarə etməyiniz üçün
          etibarlı proqram təminatıdır.
        </h1>
        <p>
          Encode ERP – müəssisə resurlarınızın idarə olunmasında tez və çevik
          qərarlar qəbul olunmasında, verilənlərin əlçatan və daha dərin
          analizində hər zaman Sizin köməyinizə çatacaqdır
        </p>
        <a href="#contact">ƏLAQƏ</a>
      </div>
      {/* <img src="/images/intromobile.svg" alt="" />
      <div className={style.IntroRight}>
        <img className={style.MacDesktop} src="/images/MacBook.svg" alt="" />
        <img className={style.MacMobile} src="/images/macmobile.svg" alt="" />
      </div> */}
    </div>
  );
};

export default Intro;
