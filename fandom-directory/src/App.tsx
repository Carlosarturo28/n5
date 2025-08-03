import { useState } from "react";
import "./i18n";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher";
import HarryPotterList from "./remotes/HarryPotterList";
import PokemonList from "./remotes/PokemonList";
import { AppWrapper, Title, LoadButton } from "./App.styles";

function App() {
  const { t } = useTranslation();
  const [activeList, setActiveList] = useState<
    "harryPotter" | "pokemon" | null
  >(null);

  return (
    <AppWrapper>
      <Title>{t("title")}</Title>
      <LanguageSwitcher />
      <LoadButton onClick={() => setActiveList("harryPotter")}>
        {t("loadHarryPotter")}
      </LoadButton>

      <LoadButton onClick={() => setActiveList("pokemon")}>
        {t("loadPokemon")}
      </LoadButton>
      {activeList === "harryPotter" && <HarryPotterList />}
      {activeList === "pokemon" && <PokemonList />}
    </AppWrapper>
  );
}

export default App;
