import { useEffect, useState, useContext } from "react";
import { git } from "../github";
import { ProjetosContainer } from "../styles/projetos";
import { Card } from "./cards";
import { AppContext } from "../context/AppContext";

interface iGitRepo {
  id: number;
  name: string;
  html_url: string;
}

export function Projetos() {
  const { language } = useContext(AppContext);

  const [listaRepos, setListaRepos] = useState<iGitRepo[]>();

  async function pegarDados() {
    try {
      const res = await git.get<iGitRepo[]>("/users/Elfo1507/repos");
      console.log(res);
      setListaRepos(res.data);
      console.log(listaRepos);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <ProjetosContainer id="projetos">
      <h3>{language.projetos.title}</h3>
      <p>{language.projetos.desc}</p>
      <ul>
        {listaRepos &&
          listaRepos.map((e) => {
            return <Card key={e.id} name={e.name} link={e.html_url} />;
          })}
      </ul>
    </ProjetosContainer>
  );
}
