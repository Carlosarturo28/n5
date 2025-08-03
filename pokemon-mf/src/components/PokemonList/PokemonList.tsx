import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Wrapper } from "./PokemonList.styles";
import { usePokemonCharacters } from "./usePokemonCharacters";
import { SearchFilter } from "./SearchFilter";

const PokemonList: React.FC = () => {
  const { t } = useTranslation();
  const { pokemon, loading, error } = usePokemonCharacters();
  const [query, setQuery] = useState("");

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  if (error) return <p>error</p>;
  if (loading) return <p>{t("loading")}</p>;

  return (
    <>
      <SearchFilter value={query} onChange={setQuery} />
      <Wrapper>
        {filteredPokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </Wrapper>
    </>
  );
};

export default PokemonList;
