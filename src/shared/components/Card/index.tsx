import React from "react";

import {
  Container,
  DiffFirstAndActual,
  Bid,
  Symbol,
  Content,
  DiffFirstAndActualPercent,
} from "./styles";

interface PropsCard {
  symbol: string;
  bid: number | null;
  firstBid: number | null;
  variation: number;
  variationPercentage: number;
}

export function Card({
  symbol,
  bid,
  firstBid,
  variation,
  variationPercentage,
  ...rest
}: PropsCard) {
  const formatBid = () => {
    if (bid === null) return "--";

    if (bid < 1) return bid.toFixed(5);

    return bid % 1 === 0 ? `${bid}.00` : bid.toFixed(2);
  };

  function calculateAppreciationDepreciation() {
    if (!firstBid || !bid) return "--";

    if (Math.abs(variation) < 0.1) {
      return variation.toFixed(5);
    }

    return Number(variation.toFixed(2));
  }

  function toFixPercentage() {
    if (!firstBid || !bid) return "--";

    return Number(variationPercentage.toFixed(3));
  }

  return (
    <Container {...rest}>
      <Symbol>{symbol}</Symbol>
      <Bid>
        <h1>{formatBid()}</h1>
      </Bid>
      <Content>
        <DiffFirstAndActual>
          {calculateAppreciationDepreciation()}
        </DiffFirstAndActual>
        <DiffFirstAndActualPercent>
          {toFixPercentage()}
        </DiffFirstAndActualPercent>
      </Content>
    </Container>
  );
}
