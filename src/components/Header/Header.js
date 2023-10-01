import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { HeaderContainer, Div1, Div2, NavLink, Burger, MenuItem } from "./HeaderStyles";
import { RxCross1 } from "react-icons/rx"
import { SlMenu } from "react-icons/sl"
import { MdLightMode, MdDarkMode } from "react-icons/md"
import  { useDarkMode } from "next-dark-mode";

const Header = (data) => {
  const { route } = useRouter();
  const [burger, setBurger] = useState(false)
  const handleBurger = () => {
    setBurger(!burger)
  }
  const { switchToDarkMode, isDarkMode } = useDarkMode();
  const handleDarkModeToggle = () => {
    switchToLightMode(!isDarkMode);
  };
  return (
    <HeaderContainer sticky>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center" }}>
            @promiser
          </a>
        </Link>
      </Div1>
      <Burger>  <button onClick={handleBurger}>  {burger ? <RxCross1 /> : <SlMenu />} </button> </Burger>
      {
        burger ? <MenuItem >
          <li>
            <Link href={route === "/all-projects" ? "/#about" : "#about"} >
              <NavLink>About</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href={route === "/all-projects" ? "/#tech" : "#tech"}>
              <NavLink>Technologies</NavLink>
            </Link>
          </li>
          <li>
            <Link href={route === "/all-projects" ? "https://blog.parmeshwar.me/" : "https://blog.parmeshwar.me/"} passHref>
              <NavLink>My Blogs</NavLink>
            </Link>
          </li>
        </MenuItem> : null
      }

      <Div2>
        <li>
          <Link href={route === "/all-projects" ? "/#about" : "#about"}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === "/all-projects" ? "/#tech" : "#tech"}>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === "/all-projects" ? "https://blog.parmeshwar.me/" : "https://blog.parmeshwar.me/"} passHref>
            <NavLink>My Blogs</NavLink>
          </Link>
        </li>
      </Div2>
      <span>

{
  isDarkMode ?
    <MdLightMode onClick={handleDarkModeToggle} size="2.5rem" /> :
    <MdDarkMode onClick={handleDarkModeToggle} size="2.5rem" />

}
</span>
   
      {/* <SocialMedia /> */}
    </HeaderContainer>
  );
};

export default Header;
