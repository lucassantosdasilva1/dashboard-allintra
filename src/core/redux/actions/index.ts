import { createAction } from "@reduxjs/toolkit";

export const alterBestBidPriceBitcoin = createAction<number>(
  "alterBestBidPriceBitcoin"
);

export const alterBestBidPriceEthereum = createAction<number>(
  "alterBestBidPriceEthereum"
);

export const alterBestBidPriceSolana = createAction<number>(
  "alterBestBidPriceSolana"
);

export const alterBestBidPriceDogecoin = createAction<number>(
  "alterBestBidPriceDogecoin"
);
