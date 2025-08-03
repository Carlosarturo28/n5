import styled from "styled-components";

export const PokemonCardWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Image = styled.img`
  width: 96px;
  height: 96px;
`;

export const Name = styled.h3`
  margin: 0.5rem 0;
  text-transform: capitalize;
`;

export const TypeBadge = styled.span<{ $type: string }>`
  display: inline-block;
  background-color: ${({ $type }) => typeColors[$type] || "#777"};
  color: white;
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  margin: 0.2rem;
  border-radius: 0.5rem;
  text-transform: capitalize;
`;

const typeColors: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
