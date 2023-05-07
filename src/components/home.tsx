import { HomeImg, HomeStyle, HomeText, HomeTitle } from "../styles/home";
import { useContext } from "react";
import eu from "../assets/eu.jpeg";
import { AppContext } from "../context/AppContext";

export function Home() {
  const { language } = useContext(AppContext);

  return (
    <HomeStyle id="home">
      <h1>.</h1>
      <HomeTitle>{language.home.titulo}</HomeTitle>
      <div>
        <HomeText>{language.home.texto}</HomeText>
        <HomeImg src={eu} alt={language.home.altFoto} />
      </div>
    </HomeStyle>
  );
}
