import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CharacterInfo } from "./CharacterInfo";
import type { Character } from "../../types/character";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("CharacterInfo", () => {
  const character: Character = {
    id: "harry-1",
    name: "Harry Potter",
    image: "https://example.com/harry.jpg",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
  };

  it("muestra correctamente la información del personaje", () => {
    render(<CharacterInfo character={character} />);

    expect(screen.getByText("characterCard.gender:")).toBeInTheDocument();
    expect(screen.getByText("characterCard.male")).toBeInTheDocument();

    expect(screen.getByText("characterCard.house:")).toBeInTheDocument();
    expect(screen.getByText("Gryffindor")).toBeInTheDocument();

    expect(screen.getByText("characterCard.birthdate:")).toBeInTheDocument();
    expect(screen.getByText("31-07-1980")).toBeInTheDocument();

    expect(screen.getByText("characterCard.birthyear:")).toBeInTheDocument();
    expect(screen.getByText("1980")).toBeInTheDocument();
  });

  it("omite los campos vacíos", () => {
    const partialCharacter: Character = {
      id: "ron-1",
      name: "Ron Weasley",
      image: "https://example.com/ron.jpg",
    };

    render(<CharacterInfo character={partialCharacter} />);

    expect(screen.queryByText("characterCard.gender:")).not.toBeInTheDocument();
    expect(screen.queryByText("characterCard.house:")).not.toBeInTheDocument();
    expect(
      screen.queryByText("characterCard.birthdate:")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("characterCard.birthyear:")
    ).not.toBeInTheDocument();
  });
});
