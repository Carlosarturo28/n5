import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PokemonList from "./PokemonList";

vi.mock("./usePokemonCharacters", () => ({
  usePokemonCharacters: () => ({
    pokemon: [
      { id: 1, name: "Pikachu", image: "pikachu.png", types: ["electric"] },
      { id: 2, name: "Charmander", image: "charmander.png", types: ["fire"] },
    ],
    loading: false,
    error: false,
  }),
}));

vi.mock("./SearchFilter", () => ({
  SearchFilter: ({
    value,
    onChange,
  }: {
    value: string;
    onChange: (val: string) => void;
  }) => (
    <input
      placeholder="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}));

vi.mock("../PokemonCard/PokemonCard", () => ({
  PokemonCard: ({ pokemon }: { pokemon: { name: string } }) => (
    <div>{pokemon.name}</div>
  ),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("PokemonList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all Pokémon initially", () => {
    render(<PokemonList />);
    //
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Charmander")).toBeInTheDocument();
  });

  it("filters Pokémon based on search input", () => {
    render(<PokemonList />);
    const input = screen.getByPlaceholderText("search");
    fireEvent.change(input, { target: { value: "char" } });

    expect(screen.queryByText("Pikachu")).not.toBeInTheDocument();
    expect(screen.getByText("Charmander")).toBeInTheDocument();
  });
});
