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
            <Link href={route === "/all-projects" ? "/#about" : "#about"}  title="About">
              <NavLink>About</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#projects" title="Projects">
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href={route === "/all-projects" ? "/#tech" : "#tech"} title="Technologies">
              <NavLink>Technologies</NavLink>
            </Link>
          </li>
          <li>
            <Link href={route === "/all-projects" ? "https://blog.parmeshwar.me/" : "https://blog.parmeshwar.me/"} passHref title="My Blogs">
              <NavLink>My Blogs</NavLink>
            </Link>
          </li>
        </MenuItem> : null
      }

      <Div2>
        <li>
          <Link href={route === "/all-projects" ? "/#about" : "#about"} title="About">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects" title="Projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === "/all-projects" ? "/#tech" : "#tech"} title="Technologies">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === "/all-projects" ? "https://blog.parmeshwar.me/" : "https://blog.parmeshwar.me/"} passHref title="My Blogs">
            <NavLink>My Blogs</NavLink>
          </Link>
        </li>
      </Div2> 
      <SocialMedia />
    </HeaderContainer>
  );
};

export default Header;
