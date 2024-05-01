import * as S from "./styled";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <S.Footer>
      <p>&copy; Leonardo Nunes Freitas</p>
      <div>
        <S.Whatsapp>

          <FaWhatsapp size={50} />
        </S.Whatsapp>
        <S.Github>
          <FaGithub size={50} />

        </S.Github>
        <S.Linkedin>

          <SiLinkedin size={50}/> 
        </S.Linkedin>
      </div>
    </S.Footer>
  );
};

export default Footer;
