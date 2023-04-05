import React from 'react'
import style from './aboutcontent.module.css'
const AboutContent = () => {
  return (
    <React.Fragment>
        <div className={style.AboutContent}>
     <div className={style.Logo}>
     <img src="/images/encodeaboutimg.svg" alt="" />
     </div>

        <p>
          2003-cü ildən öz işinin peşəkarı olan mütəxəssislərimiz müxtəlif
          mürəkkəb səviyyəli ERP layihələrinin tətbiqini uğurla həyata
          keçirmişlər. Biz, ən müxtəlif biznes sahələrinin avtomatlaşdırılması
          və rəqəmsallaşdırılması ilə məşğuluq
        </p>
      </div>
    </React.Fragment>
  )
}

export default AboutContent