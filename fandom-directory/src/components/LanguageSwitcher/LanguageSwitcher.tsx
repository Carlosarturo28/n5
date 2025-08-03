import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "./LanguageButton";
import { Wrapper } from "./LanguageSwitcher.styles";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => {
    if (lang !== currentLang) i18n.changeLanguage(lang);
  };

  return (
    <Wrapper>
      <LanguageButton
        label="English"
        lang="en"
        isActive={currentLang === "en"}
        onClick={changeLanguage}
      />
      <LanguageButton
        label="Español"
        lang="es"
        isActive={currentLang === "es"}
        onClick={changeLanguage}
      />
    </Wrapper>
  );
};
