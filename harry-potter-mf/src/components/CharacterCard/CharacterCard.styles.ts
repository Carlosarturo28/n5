import styled from "styled-components";

export const CardWrapper = styled.div<{ $housecolor: string }>`
  position: relative;
  border: 2px solid ${({ $housecolor }) => $housecolor};
  border-radius: 12px;
  background: ${({ $housecolor }) => `${$housecolor}22`};
  color: #222;
  display: flex;
  width: 220px;
  flex-direction: column;
  padding: 0.75rem;
  font-family: "Segoe UI", sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageContainer = styled.div<{ $cresturl: string | null }>`
  position: relative;
  margin-bottom: 0.5rem;

  &::after {
    content: "";
    display: ${(props) => (props.$cresturl ? "block" : "none")};
    background-image: ${({ $cresturl }) =>
      $cresturl ? `url(${$cresturl})` : "none"};
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 8px;
    right: 0px;
    width: 40px;
    height: 40px;
    pointer-events: none;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 8px;
  border: 1px solid #ccc;
  object-fit: cover;
  display: block;
`;

export const CharacterName = styled.h2<{ $housecolor: string }>`
  font-weight: 800;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 0.25rem;
  text-align: center;
  color: ${({ $housecolor }) => $housecolor};
`;

export const InfoBlock = styled.div`
  margin-top: 0.3rem;
`;

export const InfoRow = styled.div`
  font-size: 0.8rem;
  margin: 0.2rem 0;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

export const InfoLabel = styled.span`
  font-weight: 600;
  color: #444;
  margin-right: 4px;
`;

export const InfoValue = styled.strong`
  font-weight: 700;
  color: #000;
`;
