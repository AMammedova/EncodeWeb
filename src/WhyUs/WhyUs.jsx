import React from "react";
import style from "./whyus.module.css";
const WhyUs = () => {
  return (
    <div className={style.ImgContainer}>
      <div className={style.BackImg}>
        <img src="/images/encode.svg" alt="" />
      </div>

      <div className={style.TextContainer}>
        <h1 className={style.Header}>
          Bizimlə əməkdaşlıq etməyin üstünlükləri
        </h1>
        <div className={style.BoxContainer}>
          <div className={`${style.Box} ${style.One}`}>
            <div className={style.box1}>Düzgün arxitektura, düzgün təməl</div>
            <img src="/images/1.svg" alt="" />
            <div className={style.box2}>
              Beynəlxalq təcrübəyə, mühasibatlıq və biznes prosedurların
              biliyinə əsaslanaraq, Encode ERP proqram təminatının
              arxitekturasının daha düzgün qurulmuşdur. Bu da öz növbəsində
              tələb olunan hesabatların daha tez və asan əldə olunmasını təmin
              edir
            </div>
          </div>
          <div className={`${style.Box} ${style.Second}`}>
            <div className={style.box2}>
              Bir interfeysdən daxil olunan informasiyanın həm Yerli
              qanunvericiliyin tələblərinənə, həm də Mühasibat Uçotunun
              Beynəlxalq Standartlara (MUBS / IFRS ) cavab verməsini təmin
              edirik. Encode ERP istifadəçiləri bir dəfə daxil edilmiş
              informasiya üzrə hər iki uçotun paralel aparılması üstünlüklərinə
              sahibdirlər
            </div>
            <img src="/images/2.svg" alt="" />
            <div className={style.box1}>
              Yerli qanunvericilik və Beynəlxalq standarların dəstəkləməsi
            </div>
          </div>
          <div className={`${style.Box} ${style.One} ${style.Three}`}>
            <div className={style.box1}>Detallı və dərin analiz imkanı</div>
            <img src="/images/3.svg" alt="" />
            <div className={style.box2}>
              Encode ERP proqram təminatında analitikanın daha geniş və düzgün
              istifadəsi daxil olunan informasiyanı detallı və dərin analiz
              etmək imkanı verir. Həmçinin, yüksək effektivliyi olan axtarış və
              hesabat alətləri elə qurulmuşdur ki, Encode ERP istifadəçisi üçün
              istənilən informasiyanın əldə olunması rahat və asandır
            </div>
          </div>
          <div className={`${style.Box} ${style.Second} ${style.Four}`}>
            <div className={style.box2}>
              Digər sistemlərdən böyük həcmdə və sayda olan informasiyanı qısa
              müddətdə proqram təminatına daxil etmək mümkündür. Həmçinin
              müəssisədə işləyən digər sistemlərlə asan inteqrasiya imkanları
              mövcuddur
            </div>
            <img src="/images/4.svg" alt="" />
            <div className={style.box1}>İmport və inteqrasiya imkanları</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
