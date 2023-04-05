import React from 'react'
import style from '../Intro/intro.module.css'
const IntroMobile = () => {
  return (
    <div>
        {/* <img className={style.IntroMobile} src="/images/intromobile.svg" alt="" /> */}
      <div className={style.IntroRight}>
        <img className={style.MacDesktop} src="/images/MacBook.svg" alt="" />
        <img className={style.MacMobile} src="/images/macmobile.svg" alt="" />
      </div>
    </div>
  )
}

export default IntroMobile