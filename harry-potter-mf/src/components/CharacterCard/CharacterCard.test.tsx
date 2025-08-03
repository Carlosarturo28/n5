import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { CharacterCard } from "./CharacterCard";
import type { Character } from "../../types/character";

vi.mock("./houseStyles", () => ({
  getHouseInfo: () => ({
    color: "#123456",
    crest: "http://example.com/crest.png",
  }),
}));

vi.mock("./CharacterInfo", () => ({
  CharacterInfo: () => <div data-testid="character-info">Character Info</div>,
}));

const mockCharacter: Character = {
  name: "Harry Potter",
  image: "http://example.com/harry.jpg",
  house: "Gryffindor",
} as Character;

describe("<CharacterCard />", () => {
  test("renders character info correctly", () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByAltText("Harry Potter")).toHaveAttribute(
      "src",
      mockCharacter.image
    );
    expect(screen.getByTestId("character-info")).toBeInTheDocument();
  });
});
