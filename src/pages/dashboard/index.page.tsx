import {
  alterBestBidPriceBitcoin,
  alterBestBidPriceDogecoin,
  alterBestBidPriceEthereum,
  alterBestBidPriceSolana,
} from "@/core/redux/reducers/bidPriceSlice";
import { RootState } from "@/core/redux/reducers";
import { Col, Row, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useWebSocket from "react-use-websocket";
import { Card } from "@/shared/components/Card";
import { Binance, ResponseWSS } from "./@types";

const BASE_URL = process.env.NEXT_PUBLIC_URL;

const url = `${BASE_URL}/stream`;

export default function Dashboard() {
  const {
    firstBidBitcoin,
    bidBitcoin,
    variationBitcoin,
    variationPercentageBitcoin,
    firstBidEthereum,
    bidEthereum,
    variationEthereum,
    variationPercentageEthereum,
    firstBidSolana,
    bidSolana,
    variationSolana,
    variationPercentageSolana,
    firstBidDogecoin,
    bidDogecoin,
    variationDogecoin,
    variationPercentageDogecoin,
  } = useSelector((state: RootState) => state.bidsSlice);
  const dispatch = useDispatch();

  const { lastJsonMessage, sendMessage } = useWebSocket<ResponseWSS>(url, {
    onOpen: () => {
      sendMessage(
        JSON.stringify({
          method: "SUBSCRIBE",
          params: [
            Binance.BTCUSDT,
            Binance.ETHUSDT,
            Binance.DOGEUSDT,
            Binance.SOLUSDT,
          ],
          id: 1,
        })
      );
    },
    onMessage: () => {
      switch (lastJsonMessage?.stream) {
        case Binance.BTCUSDT:
          dispatch(alterBestBidPriceBitcoin(Number(lastJsonMessage.data.b)));
          break;
        case Binance.ETHUSDT:
          dispatch(alterBestBidPriceEthereum(Number(lastJsonMessage.data.b)));
          break;
        case Binance.DOGEUSDT:
          dispatch(alterBestBidPriceDogecoin(Number(lastJsonMessage.data.b)));
          break;
        case Binance.SOLUSDT:
          dispatch(alterBestBidPriceSolana(Number(lastJsonMessage.data.b)));
          break;
      }
    },
    onError: (event) => {
      message.error("Erro ao comunicar com o servidor");
    },
    shouldReconnect: (closeEvent) => true, // or `event => true` to reconnect regardless of the event
    reconnectAttempts: 10, // number of reconnect attempts
    reconnectInterval: (
      attemptNumber // time to wait between reconnect attempts
    ) => Math.min(Math.pow(2, attemptNumber) * 1000, 10000),
  });

  return (
    <>
      <Row gutter={18}>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
          <Card
            symbol="Bitcoin / TetherUS"
            bid={bidBitcoin}
            firstBid={firstBidBitcoin}
            variation={variationBitcoin}
            variationPercentage={variationPercentageBitcoin}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
          <Card
            symbol="Ethereum / TetherUS"
            bid={bidEthereum}
            firstBid={firstBidEthereum}
            variation={variationEthereum}
            variationPercentage={variationPercentageEthereum}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
          <Card
            symbol="Dogecoin / TetherUS"
            bid={bidDogecoin}
            firstBid={firstBidDogecoin}
            variation={variationDogecoin}
            variationPercentage={variationPercentageDogecoin}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
          <Card
            symbol="Solana / TetherUS"
            bid={bidSolana}
            firstBid={firstBidSolana}
            variation={variationSolana}
            variationPercentage={variationPercentageSolana}
          />
        </Col>
      </Row>
    </>
  );
}
