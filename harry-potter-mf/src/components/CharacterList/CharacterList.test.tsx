import { render, screen, fireEvent } from "@testing-library/react";
import CharacterList from "./CharacterList";
import { vi } from "vitest";
import { useCharacters } from "./useCharacters";

vi.mock("./useCharacters", () => ({
  useCharacters: vi.fn(),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock("../CharacterCard/CharacterCard", () => ({
  CharacterCard: ({
    character,
  }: {
    character: { id: string; name: string };
  }) => <div data-testid="character-card">{character.name}</div>,
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
      data-testid="search-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}));

const mockedUseCharacters = useCharacters as unknown as ReturnType<
  typeof vi.fn
>;

describe("CharacterList", () => {
  const mockCharacters = [
    { id: "1", name: "Harry Potter" },
    { id: "2", name: "Hermione Granger" },
    { id: "3", name: "Ron Weasley" },
  ];

  it("muestra mensaje de error si falla la carga", () => {
    mockedUseCharacters.mockReturnValue({
      characters: [],
      loading: false,
      error: "Failed to fetch",
    });

    render(<CharacterList />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it("muestra loading si está cargando", () => {
    mockedUseCharacters.mockReturnValue({
      characters: [],
      loading: true,
      error: null,
    });

    render(<CharacterList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renderiza los personajes filtrados", () => {
    mockedUseCharacters.mockReturnValue({
      characters: mockCharacters,
      loading: false,
      error: null,
    });

    render(<CharacterList />);
    const cards = screen.getAllByTestId("character-card");
    expect(cards.length).toBe(3);
  });

  it("filtra personajes según la búsqueda", () => {
    mockedUseCharacters.mockReturnValue({
      characters: mockCharacters,
      loading: false,
      error: null,
    });

    render(<CharacterList />);
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "hermione" } });

    const filtered = screen.getAllByTestId("character-card");
    expect(filtered.length).toBe(1);
    expect(filtered[0]).toHaveTextContent("Hermione Granger");
  });
});
