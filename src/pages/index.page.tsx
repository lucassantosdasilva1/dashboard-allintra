import React from "react";
import useWebSocket from "react-use-websocket";

const url = "wss://stream.binance.com:9443/ws/btcusdt@bookTicker";
// const url = " wss://testnet.binance.vision/ws/btcusdt@bookTicker";
export default function Home() {
  // webSocket("btcusdt@bookTicker").on("message", (data) => {
  //   console.log(data);
  // });
  const [informacaoDaCripto, setInformacaoDaCripto] = React.useState({} as any);

  const { lastJsonMessage, sendMessage } = useWebSocket(url, {
    onOpen: () => console.log(`Connected to App WS`),
    onMessage: () => {
      if (lastJsonMessage) {
        console.log(lastJsonMessage);
        setInformacaoDaCripto(lastJsonMessage);
      }
    },
    onError: (event) => {
      console.error(event);
    },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000,
  });

  React.useEffect(() => {}, []);

  // socket.on("message", (data) => {
  //   console.log(data);
  // });

  // const ws = new WebSocket(BASE_URL + "/ws/btcusdt@bookTicker");
  // ws.onmessage = function incoming(data) {
  //   console.log(data);
  // };

  return (
    <>
      <h1>TIME ALLINTRA</h1>

      <h2>Informações da Cripto</h2>
      <p>Symbol: {informacaoDaCripto?.s}</p>
      {/* <p>Price: {informacaoDaCripto?.p}</p>
      <p>Quantity: {informacaoDaCripto?.q}</p>
      <p>First Trade ID: {informacaoDaCripto?.f}</p>
      <p>Last Trade ID: {informacaoDaCripto?.l}</p>
      <p>Trade Time: {informacaoDaCripto?.T}</p>
      <p>Is the buyer the market maker? {informacaoDaCripto?.m}</p>
      <p>Ignore: {informacaoDaCripto?.M}</p> */}

      <p>Best Ask Price: {informacaoDaCripto.a}</p>
      <p>Best Ask Quantity: {informacaoDaCripto.A}</p>
      <p>Best Bid Price: {informacaoDaCripto.b}</p>
      <p>Best Bid Quantity: {informacaoDaCripto.B}</p>
    </>
  );
}
