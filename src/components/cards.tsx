import { CardStyle } from "../styles/card";
import { CardCompStyle } from "../styles/cardComp";

interface iCard {
  name: string;
  link?: string;
}

const ContentGit = ({ name, link }: iCard) => {
  return (
    <>
      <h3>{name}</h3>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          Repo
        </a>
      )}
    </>
  );
};

export function Card({ name, link }: iCard) {
  return link ? (
    <CardStyle>
      <ContentGit name={name} link={link} />
    </CardStyle>
  ) : (
    <CardCompStyle>
      <ContentGit name={name} />
    </CardCompStyle>
  );
}
