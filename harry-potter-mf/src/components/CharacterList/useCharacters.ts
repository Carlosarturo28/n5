import { useEffect, useState } from "react";
import { fetchCharacters } from "../../api/fetchCharacters";
import type { Character } from "../../types/character";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { characters, error, loading };
};
