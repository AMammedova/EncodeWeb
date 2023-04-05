import React, { useState, useEffect } from "react";
import style from "./header.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleBurgerClick = () => {
    
    setShowSidebar(true);
    console.log(showSidebar)
  };
  const handleRemoveClick=()=>{
    setShowSidebar(false);
  }

  return (
    <nav className={isScrolled ? style.Scroll : style.Navbar}>
      <div className={style.Logo}>
        <img src="/images/logo.svg" alt="" />
      </div>

      <div className={style.Burger}>
        {
          window.innerWidth <= 480 ? <CiMenuBurger  onClick={handleBurgerClick}/>:null
        }
      
      </div>

      {showSidebar?(
        <ul className={style.Sidebar}>
          <div className={style.RemoveIcon} onClick={handleRemoveClick}><AiOutlineClose/></div>
          <li>
            <a href="#about">HAQQIMIZDA</a>
          </li>
          <li>
            <a href="#contact">NIYƏ BİZ?</a>
          </li>
          <li>
            <a href="#contact">FUNKSİONAL</a>
          </li>
          <li>
            <a href="#faq">PROYEKTLƏRİMİZ</a>
          </li>
          <li>
            <a href="#faq">RƏYLƏR</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#faq">ƏLAQƏ</a>
          </li>
        </ul>
      ) : (
        <ul className={isScrolled ? style.NavbarScroll : style.NavLinks}>
          <li>
            <a href="#about">HAQQIMIZDA</a>
          </li>
          <li>
            <a href="#contact">NIYƏ BİZ?</a>
          </li>
          <li>
            <a href="#contact">FUNKSİONAL</a>
          </li>
          <li>
            <a href="#faq">PROYEKTLƏRİMİZ</a>
          </li>
          <li>
            <a href="#faq">RƏYLƏR</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#faq">ƏLAQƏ</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
