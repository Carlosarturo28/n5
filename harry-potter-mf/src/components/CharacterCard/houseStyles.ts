export const houseStyles: Record<string, { color: string; crest: string }> = {
  Gryffindor: {
    color: "#7F0909",
    crest:
      "https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png",
  },
  Slytherin: {
    color: "#0D6217",
    crest:
      "https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png",
  },
  Ravenclaw: {
    color: "#222F5B",
    crest:
      "https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png",
  },
  Hufflepuff: {
    color: "#EEE117",
    crest:
      "https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png",
  },
};

export const getHouseInfo = (house?: string | null) => {
  if (!house) return null;
  return houseStyles[house];
};
