import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import type { Character } from "../../types/character";
import {
  InfoBlock,
  InfoRow,
  InfoLabel,
  InfoValue,
} from "./CharacterCard.styles";

interface Props {
  character: Character;
}

export const CharacterInfo: React.FC<Props> = memo(({ character }) => {
  const { t } = useTranslation();

  return (
    <InfoBlock>
      {character.gender && (
        <InfoRow>
          <InfoLabel>{t("characterCard.gender")}:</InfoLabel>
          <InfoValue>
            {t(`characterCard.${character.gender.toLowerCase()}`)}
          </InfoValue>
        </InfoRow>
      )}
      {character.house && (
        <InfoRow>
          <InfoLabel>{t("characterCard.house")}:</InfoLabel>
          <InfoValue>{character.house}</InfoValue>
        </InfoRow>
      )}
      {character.dateOfBirth && (
        <InfoRow>
          <InfoLabel>{t("characterCard.birthdate")}:</InfoLabel>
          <InfoValue>{character.dateOfBirth}</InfoValue>
        </InfoRow>
      )}
      {character.yearOfBirth && (
        <InfoRow>
          <InfoLabel>{t("characterCard.birthyear")}:</InfoLabel>
          <InfoValue>{character.yearOfBirth}</InfoValue>
        </InfoRow>
      )}
    </InfoBlock>
  );
});
