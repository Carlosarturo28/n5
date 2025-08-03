import { describe, it, expect } from "vitest";
import { getHouseInfo, houseStyles } from "./houseStyles";

describe("houseStyles", () => {
  it("should contain Gryffindor with correct values", () => {
    expect(houseStyles.Gryffindor).toEqual({
      color: "#7F0909",
      crest:
        "https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png",
    });
  });

  it("should contain all 4 houses", () => {
    expect(Object.keys(houseStyles)).toEqual([
      "Gryffindor",
      "Slytherin",
      "Ravenclaw",
      "Hufflepuff",
    ]);
  });
});

describe("getHouseInfo", () => {
  it("should return correct info for Gryffindor", () => {
    const info = getHouseInfo("Gryffindor");
    expect(info).toEqual(houseStyles.Gryffindor);
  });

  it("should return null for undefined", () => {
    expect(getHouseInfo(undefined)).toBeNull();
  });

  it("should return null for null", () => {
    expect(getHouseInfo(null)).toBeNull();
  });

  it("should return undefined for non-existent house", () => {
    expect(getHouseInfo("Durmstrang")).toBeUndefined();
  });
});
