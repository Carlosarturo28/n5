import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchCharacters } from "./fetchCharacters";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalAny: any = globalThis;

describe("fetchCharacters", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns characters correctly from API", async () => {
    const mockResponse = [
      {
        name: "Harry Potter",
        image: "harry.jpg",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "31-07-1980",
        yearOfBirth: 1980,
      },
      {
        name: "Hermione Granger",
        image: "hermione.jpg",
      },
    ];

    globalAny.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    );

    const result = await fetchCharacters();

    expect(fetch).toHaveBeenCalledOnce();
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      id: "Harry Potter-0",
      name: "Harry Potter",
      image: "harry.jpg",
      gender: "male",
      house: "Gryffindor",
      dateOfBirth: "31-07-1980",
      yearOfBirth: 1980,
    });
  });

  it("throws error if fetch fails", async () => {
    globalAny.fetch = vi.fn(() => Promise.resolve({ ok: false, status: 500 }));

    await expect(fetchCharacters()).rejects.toThrow(
      "Failed to fetch characters"
    );
  });

  it("returns empty array if response is not an array", async () => {
    globalAny.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: "not an array" }),
      })
    );

    const result = await fetchCharacters();
    expect(result).toEqual([]);
  });
});
