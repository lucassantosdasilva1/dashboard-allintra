import React from "react";
import { Card, CardProps } from "antd";
import styled from "styled-components";

interface PropsCard extends CardProps {
  children: React.ReactNode;
}

function colorize(value: number) {
  return value < 0 ? "#f23645" : "#089981";
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
  font-family: "Inter", sans-serif;
`;

export const Symbol = styled.h3`
  font-size: 1.5rem;
  color: #292929;
  font-family: "Inter", sans-serif;
`;

export const Bid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  h1 {
    font-size: 2rem;
    color: #292929;
    margin: 0;
    padding: 0;
  }

  ::after {
    content: " USDT";
    font-size: 1rem;
    color: #292929;
  }
`;

export const DiffFirstAndActual = styled.h3`
  color: ${(props) => colorize(Number(props.children))};
  font-size: 1.5rem;
`;

export const DiffFirstAndActualPercent = styled.h3`
  color: ${(props) => colorize(Number(props.children))};
  font-size: 1.5rem;

  ::after {
    content: " %";
    font-size: 1rem;
    color: ${(props) => colorize(Number(props.children))};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
