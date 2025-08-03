import React, { memo } from "react";
import type { Character } from "../../types/character";
import { CharacterInfo } from "./CharacterInfo";
import {
  CardWrapper,
  ImageContainer,
  CharacterImage,
  CharacterName,
} from "./CharacterCard.styles";
import { getHouseInfo } from "./houseStyles";

interface Props {
  character: Character;
}

export const CharacterCard: React.FC<Props> = memo(({ character }) => {
  const houseInfo = getHouseInfo(character.house);
  const houseColor = houseInfo?.color || "#CCCCCC";
  const crestUrl = houseInfo?.crest || null;

  return (
    <CardWrapper $housecolor={houseColor}>
      <ImageContainer $cresturl={crestUrl}>
        <CharacterImage src={character.image} alt={character.name} />
      </ImageContainer>

      <CharacterName $housecolor={houseColor}>{character.name}</CharacterName>

      <CharacterInfo character={character} />
    </CardWrapper>
  );
});
