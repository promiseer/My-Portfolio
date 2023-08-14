import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { HeaderContainer, Div1, Div2, NavLink } from "./HeaderStyles";
import { Button } from "../Cards/CardStyles";

const Header = (data) => {
  const { route } = useRouter();
  return (
    <HeaderContainer sticky>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center" }}>
            @promiser
          </a>
        </Link>
      </Div1>

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
