import { SocialContainer, SocialIcons } from "./SocialMedia.styles";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";

export default function SocialMedia({ inFooter }) {
  return (
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href="https://twitter.com/promiseeer"
        title="lets connect on twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://github.com/promiseer"
        title="Visit my github profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/promiser"
        title="Contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="mailto:rathodparmeshwar4321@gmail.com"
        title="Send directly an email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CgMail size="3rem" />
      </SocialIcons>
    </SocialContainer>
  );
}
