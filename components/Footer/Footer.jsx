import React from 'react'
import style from './footer.module.css'
const Footer = () => {
  return (
    <div className={style.Footer}>
<div className={style.footerLogo}>
    <img src="/images/logo.svg" alt="" />
    <p>2022 © ENCODE <br/>
Bütün hüquqlar qorunur</p>
</div>
<div className={style.footerContact}>
    <div className={style.contactContainer}>
        <img src='/images/phoneicon.svg'></img>
        <span> +994 xx xxx xx xx</span>
    </div>
    <div className={style.emailContainer}>
        <img src="/images/letter.svg" alt="" />
        <span>example@gmail.com</span>
    </div>
</div>
<div className={style.footerLogoImg}>
    <img src="/images/footerstar.svg" alt="" />
</div>

    </div>
  )
}

export default Footer