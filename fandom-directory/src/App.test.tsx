import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

vi.mock("react-i18next", async () => {
  const actual = await vi.importActual<typeof import("react-i18next")>(
    "react-i18next"
  );
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: { changeLanguage: vi.fn() },
    }),
    initReactI18next: { type: "3rdParty", init: vi.fn() },
  };
});

vi.mock("./remotes/HarryPotterList", () => ({
  default: () => <div>Mocked Harry Potter List</div>,
}));

vi.mock("./remotes/PokemonList", () => ({
  default: () => <div>Mocked Pokemon List</div>,
}));

vi.mock("./components/LanguageSwitcher/LanguageSwitcher", () => ({
  LanguageSwitcher: () => <div>Mocked Language Switcher</div>,
}));

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders title and buttons", () => {
    render(<App />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("loadHarryPotter")).toBeInTheDocument();
    expect(screen.getByText("loadPokemon")).toBeInTheDocument();
  });

  it("loads Harry Potter list when button is clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("loadHarryPotter"));
    expect(screen.getByText("Mocked Harry Potter List")).toBeInTheDocument();
  });

  it("loads Pokemon list when button is clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("loadPokemon"));
    expect(screen.getByText("Mocked Pokemon List")).toBeInTheDocument();
  });
});
