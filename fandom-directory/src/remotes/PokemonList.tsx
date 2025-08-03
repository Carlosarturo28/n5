import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

const CharacterList = lazy(() => import("pokemon/CharacterList"));

const PokemonList = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<p>{t("loading")}</p>}>
      <CharacterList />
    </Suspense>
  );
};

export default PokemonList;
