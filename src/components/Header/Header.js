import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { HeaderContainer, Div1, Div2, NavLink ,Burger} from "./HeaderStyles";
import { Button } from "../Cards/CardStyles";
import {CgMenu,CgCross} from "react-icons/cg"
import {RxCross1} from "react-icons/rx"

const Header = (data) => {
  const { route } = useRouter();
  const [burger, setBurger]=useState(false)
  const handleBurger=()=>{
    setBurger(!burger)
  }
  return (
    <HeaderContainer sticky>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center" }}>
            @promiser
          </a>
        </Link>
      </Div1>
      <Burger>  <button onClick={handleBurger}>  {burger? <RxCross1/>: <CgMenu/> } </button> </Burger>

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
      <SocialMedia />
    </HeaderContainer>
  );
};

export default Header;
