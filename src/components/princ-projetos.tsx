import { PProjetosStyle } from "../styles/pprojetos";
import { useContext } from "react";
import kenziehub from "../assets/kenziehub.png";
import nomadroom from "../assets/nomadroom.png";
import { AppContext } from "../context/AppContext";

export function PProjetos() {
  const { language } = useContext(AppContext);

  return (
    <PProjetosStyle>
      <div>
        <img src={kenziehub} alt={language.pprojetos.altKenziehub} />
        <p>{language.pprojetos.kenziehub}</p>
      </div>
      <div>
        <img src={nomadroom} alt={language.pprojetos.altNomadRoom} />
        <p>{language.pprojetos.nomadRoom}</p>
      </div>
    </PProjetosStyle>
  );
}
