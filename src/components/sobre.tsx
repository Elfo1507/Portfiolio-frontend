import { AppContext } from "../context/AppContext";
import { SobreStyle } from "../styles/sobre";
import { useContext } from "react";

export function Sobre() {
  const { language } = useContext(AppContext);

  return (
    <SobreStyle id="sobre">
      <p>{language.sobre.texto}</p>
    </SobreStyle>
  );
}
