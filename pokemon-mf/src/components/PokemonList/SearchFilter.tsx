import React from "react";
import { useTranslation } from "react-i18next";
import { SearchInput } from "./PokemonList.styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchFilter: React.FC<Props> = ({ value, onChange }) => {
  const { t } = useTranslation();

  return (
    <SearchInput
      type="text"
      placeholder={t("searchbar.pokemonPlaceholder")}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
