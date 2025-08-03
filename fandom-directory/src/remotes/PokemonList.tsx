import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

export const isClient = typeof window !== "undefined";

const CharacterList = isClient
  ? lazy(() => import("pokemon/CharacterList"))
  : () => null;

const PokemonList = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<p>{t("loading")}</p>}>
      <CharacterList />
    </Suspense>
  );
};

export default PokemonList;
