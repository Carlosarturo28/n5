import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Input = styled.input`
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  display: block;
  width: 90%;
  max-width: 400px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const SearchFilter: React.FC<Props> = ({ value, onChange }) => {
  const { t } = useTranslation();
  return (
    <Input
      type="text"
      placeholder={t("searchbar.placeholder")}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
