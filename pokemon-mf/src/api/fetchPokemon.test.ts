import { describe, it, expect, vi, beforeEach } from "vitest";
import type { PokemonCharacter } from "../types/character";
import { fetchPokemon } from "./fetchCharacters";

const mockResults = [
  { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
];

const mockDetails = {
  id: "25",
  name: "pikachu",
  sprites: { front_default: "https://img.pikachu.png" },
  height: 4,
  weight: 60,
  types: [{ type: { name: "electric" } }],
  abilities: [{ ability: { name: "static" } }],
};

describe("fetchPokemon", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("fetches and maps Pokémon data correctly", async () => {
    global.fetch = vi
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ results: mockResults }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockDetails,
      } as Response);

    const result = await fetchPokemon();

    const expected: PokemonCharacter[] = [
      {
        id: "25",
        name: "pikachu",
        image: "https://img.pikachu.png",
        height: 4,
        weight: 60,
        types: ["electric"],
        abilities: ["static"],
      },
    ];

    expect(result).toEqual(expected);
  });

  it("throws error when response is not ok", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({ ok: false } as Response);

    await expect(fetchPokemon()).rejects.toThrow("Failed to fetch Pokémon");
  });
});
