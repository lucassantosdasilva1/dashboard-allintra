import React from "react";
import { Card, CardProps } from "antd";
import theme from "@/shared/theme";
import styled from "styled-components";

interface PropsCard extends CardProps {
  children: React.ReactNode;
}

function colorize(value: number) {
  return value < 0 ? theme.colors.colorDanger : theme.colors.success;
}

export const Container = styled(Card).attrs({
  style: {
    display: "flex",
    flex: 1,
    width: "100%",
    borderRadius: "1rem",
    marginBottom: 10,
    padding: 0,
  },
} as PropsCard)<PropsCard>`
  box-shadow: 7px 7px 35px rgba(0, 0, 0, 0.15);
`;

export const Symbol = styled.h3`
  color: ${theme.colors.textColorPrimary};
`;

export const Bid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  h1 {
    color: ${theme.colors.textColorPrimary};
  }

  ::after {
    margin-left: 0.5rem;
    content: "USDT";
    font-size: ${theme.fonts.sizes.medium}px;
    color: ${theme.colors.textColorPrimary};
  }
`;

export const DiffFirstAndActual = styled.h3`
  color: ${(props) => colorize(Number(props.children))};
`;

export const DiffFirstAndActualPercent = styled.h3`
  margin-left: 0.5rem;
  color: ${(props) => colorize(Number(props.children))};

  ::after {
    content: " %";
    font-size: ${theme.fonts.sizes.large}px;
    color: ${(props) => colorize(Number(props.children))};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
