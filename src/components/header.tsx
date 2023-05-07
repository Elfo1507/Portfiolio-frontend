import { useState, useContext } from "react";
import Logo from "../assets/logo.png";
import { HeaderMenu } from "../styles/header";
import br from "../assets/BRflag.png";
import us from "../assets/USflag.png";
import { AppContext } from "../context/AppContext";
import { textEN, textPT } from "../Texts/texts";

export function Header() {
  const { language, setLanguage } = useContext(AppContext);
  const [lang, setLang] = useState("PT-br");
  const [flag, setFlag] = useState(br);

  const handleLang = () => {
    if (lang === "PT-br") {
      setLang("EN-us");
      setLanguage(textEN);
    } else {
      setLang("PT-br");
      setLanguage(textPT);
    }
    flag === br ? setFlag(us) : setFlag(br);
  };
  return (
    <HeaderMenu>
      <img src={Logo} alt="logo" height="30px" width="30px" />
      <div className="nav">
        <a href="#home">Home</a>
        <a href="#projetos">{language.header.projetos}</a>
        <a href="#sobre">{language.header.sobre}</a>
        <a href="#contatos">{language.header.contatos}</a>
      </div>
      <div className="lang" onClick={handleLang}>
        <p>{lang}</p>
        <img src={flag} height="20px" width="20px" />
      </div>
    </HeaderMenu>
  );
}
