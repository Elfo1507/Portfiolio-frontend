import { AppContext } from "../context/AppContext";
import { CompetenciasContainer } from "../styles/competencias";
import { Card } from "./cards";
import { useContext } from "react";

export const Competencias = () => {
  const { language } = useContext(AppContext);

  return (
    <CompetenciasContainer id="competencias">
      <h3>{language?.competencias.titulo}</h3>
      <h2>Hard skills:</h2>
      <ul>
        {language?.competencias.listaCompetenciasHard.map(
          (e: string, i: number) => {
            return <Card key={i} name={e} />;
          }
        )}
      </ul>
      <h2>Soft skills:</h2>
      <ul>
        {language?.competencias.listaCompetenciasSoft.map(
          (e: string, i: number) => {
            return <Card key={i} name={e} />;
          }
        )}
      </ul>
    </CompetenciasContainer>
  );
};
