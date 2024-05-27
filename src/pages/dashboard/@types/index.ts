export enum Binance {
  BTCUSDT = "btcusdt@bookTicker",
  ETHUSDT = "ethusdt@bookTicker",
  DOGEUSDT = "dogeusdt@bookTicker",
  SOLUSDT = "solusdt@bookTicker",
}

export type ResponseWSS = {
  data: {
    s: string;
    u: number;
    b: string;
    B: string;
    a: string;
    A: string;
  };
  stream:
    | Binance.BTCUSDT
    | Binance.ETHUSDT
    | Binance.DOGEUSDT
    | Binance.SOLUSDT;
};
