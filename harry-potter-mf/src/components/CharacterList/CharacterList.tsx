import React, { useState } from "react";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { useCharacters } from "./useCharacters";
import { Wrapper } from "./CharacterList.styles";
import { SearchFilter } from "./SearchFilter";
import { useTranslation } from "react-i18next";

const CharacterList: React.FC = () => {
  const { t } = useTranslation();
  const { characters, error, loading } = useCharacters();
  const [query, setQuery] = useState("");

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(query.toLowerCase())
  );

  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>{t("loading")}</p>;

  return (
    <>
      <SearchFilter value={query} onChange={setQuery} />
      <Wrapper>
        {filteredCharacters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </Wrapper>
    </>
  );
};

export default CharacterList;
