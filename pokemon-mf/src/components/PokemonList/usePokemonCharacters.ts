import { useEffect, useState } from "react";
import { fetchPokemon } from "../../api/fetchCharacters";
import type { PokemonCharacter } from "../../types/character";

export const usePokemonCharacters = () => {
  const [pokemon, setPokemon] = useState<PokemonCharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPokemon()
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
        setLoading(false);
      });
  }, []);

  return { pokemon, loading, error };
};
