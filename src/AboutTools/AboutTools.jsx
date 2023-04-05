import React from "react";
import style from "./abouttools.module.css";
const AboutTools = () => {
  return (
    <div className={style.AboutTools}>
      <h1>Təqdim etdiyimiz xidmətlər aşağıdakılardır:</h1>
      <div className={style.ToolBox}>
        <div className={style.BoxContainer}>
          <div className={`${style.Box} ${style.One}`}>
            <img src="/images/box1.svg" alt="" />
            <p>Lisenziya satışı</p>
          </div>
          <div className={`${style.CircleContainer} ${style.CircleOne}`}>
            <span className={style.Circle}></span>
            <span className={style.Circle}></span>
            <span className={style.Circle}></span>
          </div>
        </div>
        <div className={style.BoxContainer}>
          <div className={`${style.Box} ${style.Two}`}>
            <img src="/images/box2.svg" alt="" />
            <p>Texniki dəstək</p>
          </div>
          <div className={`${style.CircleContainer} ${style.CircleTwo}`}>
            <span className={style.Circle}></span>
            <span className={style.Circle}></span>
            <span className={style.Circle}></span>
          </div>
        </div>

        <div className={style.BoxContainer}>
          <div className={`${style.Box} ${style.Three}`}>
            <img src="/images/box3.png" alt="" />
            <p>
              Proqram <br /> kodlarının yazılması
            </p>
          </div>
          <div className={`${style.CircleContainer} ${style.CircleThree}`}>
            <span className={style.Circle}></span>
            <span className={style.Circle}></span>
            <span className={style.Circle}></span>
          </div>
        </div>

        <div className={style.BoxContainer}>
          <div className={`${style.Box} ${style.Four}`}>
            <img src="/images/box4.svg" alt="" />
            <p>
              Proqram <br /> təminatının tətbiqi
            </p>
          </div>
          <div className={`${style.CircleContainer} ${style.CircleFour}`}>
            <span className={style.Circle}></span>
            <span className={style.Circle}></span>
            <span className={style.Circle}></span>
          </div>
        </div>
      </div>
      <div className={style.Graph}>
        <div className={style.GraphBoxBorder}>
          <div className={style.GraphBox}>
            <img src="/images/box3.png" alt="" />
            <p>
              Yerli qanunvericilik və Mühasibat Uçotunun Beynəlxalq Standartları
              ( MUBS / IFRS ) əsasında kompleks xidmətlərin təklif olunması
            </p>
          </div>
        </div>
{
   window.innerWidth <= 480 ? <img className={style.ArrowBox} src="images/arrowmob.svg" alt="" />:<img className={style.ArrowBox} src="images/arrowbox.svg" alt="" />
}
        
        <div className={style.ToolBoxGraph}>
          <div className={style.BoxContainer}>
            <div className={`${style.BoxGraph} ${style.One}`}>
              <p>Uçot siyasətinin yazılması</p>
            </div>
            <div className={`${style.CircleContainer} ${style.CircleOne}`}>
              <span className={style.Circle}></span>
              <span className={style.Circle}></span>
              <span className={style.Circle}></span>
            </div>
          </div>
          <div className={style.BoxContainer}>
            <div className={`${style.BoxGraph} ${style.Two}`}>
              <p>
                Əməkdaşların və ya yeni kadrların mühasibat, biznes prosedurları
                və Encode ERP üzrə hazırlanması, treninqlərin keçirilməsi
              </p>
            </div>
            <div className={`${style.CircleContainer} ${style.CircleTwo}`}>
              <span className={style.Circle}></span>
              <span className={style.Circle}></span>
              <span className={style.Circle}></span>
            </div>
          </div>

          <div className={style.BoxContainer}>
            <div className={`${style.BoxGraph} ${style.Three}`}>
              <p>Uçot siyasəti əsasında Encode ERP tətbiq olunması və s.</p>
            </div>
            <div className={`${style.CircleContainer} ${style.CircleThree}`}>
              <span className={style.Circle}></span>
              <span className={style.Circle}></span>
              <span className={style.Circle}></span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.Info}>
        <div className={style.InfoImg}>
          <img src="/images/infoimg.svg" alt="" />
        </div>
        <div className={style.InfoText}>
          <div className={style.InfoBox}>
            <img src="/images/triangle.svg" alt="" />
            <p>
              Mütəxəssislərimiz ERP həlləri ilə əlaqədar, müəssisənizdə
              istənilən məsələni həll etməyə qadirdir. Belə ki, biz Encode ERP
              sistemini tələblərinizə uyğunlaşdırmağa, müştərinin digər
              sistemləri ilə inteqrasiya etməyə və yeni prosedurları biznesiniz
              üçün tətbiq etməyə hazırıq
            </p>
          </div>
          <div className={style.InfoBox}>
            <img src="/images/square.svg" alt="" />
            <p>
              Müştərilərimiz kiçik, orta və iri müəssisələr olmaqla, bazarın
              müxtəlif seqmentlərində fəaliyyət göstərə bilərlər
            </p>
          </div>
          <div className={style.InfoBox}>
            <img src="/images/ellips.svg" alt="" />
            <p>
              Təqdim etdiyimiz Encode ERP proqram məhsulunun koöməkliyi ilə
              müəssisə rəhbərləri biznesi vahid platformadan idarə etməklə
              yanaşı, lazımi hesabatları sistemdən anında əldə etmək imkanına
              sahibdir. Vaxtında və tez əldə olunmuş informasiya isə qərarların
              düzgün və çevik qəbul olumasına şərait yaradır
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTools;
