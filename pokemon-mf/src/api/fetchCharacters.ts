import type { PokemonCharacter } from "../types/character";

interface PokeAPIResult {
  name: string;
  url: string;
}

interface PokeAPIType {
  type: {
    name: string;
  };
}

interface PokeAPIAbility {
  ability: {
    name: string;
  };
}

export const fetchPokemon = async (): Promise<PokemonCharacter[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon");
  }

  const { results }: { results: PokeAPIResult[] } = await response.json();

  const detailed = await Promise.all(
    results.map(async ({ url }) => {
      const res = await fetch(url);
      const data = await res.json();

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        height: data.height,
        weight: data.weight,
        types: data.types.map((t: PokeAPIType) => t.type.name),
        abilities: data.abilities.map((a: PokeAPIAbility) => a.ability.name),
      };
    })
  );

  return detailed;
};
