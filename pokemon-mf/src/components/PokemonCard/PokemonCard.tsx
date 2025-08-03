import { useTranslation } from "react-i18next";
import {
  PokemonCardWrapper,
  Image,
  Name,
  TypeBadge,
} from "./PokemonCard.styles";
import type { PokemonCharacter } from "../../types/character";

interface Props {
  pokemon: PokemonCharacter;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { t } = useTranslation();

  return (
    <PokemonCardWrapper>
      <Image src={pokemon.image} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <div>
        {pokemon.types.map((type) => (
          <TypeBadge key={type} $type={type}>
            {t(`pokemonTypes.${type}`)}
          </TypeBadge>
        ))}
      </div>
    </PokemonCardWrapper>
  );
};
