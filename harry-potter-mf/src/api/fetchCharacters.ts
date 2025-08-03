import type { Character } from "../types/character";

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await fetch("https://hp-api.onrender.com/api/characters");

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }

  const raw = await response.json();

  if (!Array.isArray(raw)) return [];

  const result = raw
    .filter(
      (
        item
      ): item is {
        name: string;
        image: string;
        gender?: string;
        house?: string;
        dateOfBirth?: string;
        yearOfBirth?: number;
      } => typeof item?.name === "string" && typeof item?.image === "string"
    )
    .map(
      (char, index): Character => ({
        id: `${char.name}-${index}`,
        name: char.name,
        image: char.image,
        gender: char.gender,
        house: char.house,
        dateOfBirth: char.dateOfBirth,
        yearOfBirth: char.yearOfBirth,
      })
    );

  return result.slice(0, 20);
};
