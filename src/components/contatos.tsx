import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ContatosStyle } from "../styles/contatos";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

export function Contatos() {
  const { language } = useContext(AppContext);

  return (
    <ContatosStyle id="contatos">
      <h2>{language?.contatos.titulo}</h2>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5531995382956&text=Ol%C3%A1%2C%20vim%20por%20meio%20do%20seu%20portfolio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os"
          target="_blank"
          rel="noreferrer"
        >
          Whatsapp
          <BsWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/alefi-cunha/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
          <BsLinkedin />
        </a>
        <a href="https://github.com/Elfo1507" target="_blank" rel="noreferrer">
          GitHub
          <BsGithub />
        </a>
      </div>
    </ContatosStyle>
  );
}
