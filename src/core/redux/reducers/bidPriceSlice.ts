import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BidPricesType {
  firstBidBitcoin: number | null;
  bidBitcoin: number | null;
  variationPercentageBitcoin: number;
  variationBitcoin: number;

  firstBidEthereum: number | null;
  bidEthereum: number | null;
  variationPercentageEthereum: number;
  variationEthereum: number;

  firstBidSolana: number | null;
  bidSolana: number | null;
  variationPercentageSolana: number;
  variationSolana: number;

  firstBidDogecoin: number | null;
  bidDogecoin: number | null;
  variationPercentageDogecoin: number;
  variationDogecoin: number;
}

const initialState: BidPricesType = {
  firstBidBitcoin: null,
  bidBitcoin: null,
  variationPercentageBitcoin: 0,
  variationBitcoin: 0,

  firstBidEthereum: null,
  bidEthereum: null,
  variationPercentageEthereum: 0,
  variationEthereum: 0,

  firstBidSolana: null,
  bidSolana: null,
  variationPercentageSolana: 0,
  variationSolana: 0,

  firstBidDogecoin: null,
  bidDogecoin: null,
  variationPercentageDogecoin: 0,
  variationDogecoin: 0,
};

const bidsSlice = createSlice({
  name: "bids",
  initialState,
  reducers: {
    alterBestBidPriceBitcoin(state, action: PayloadAction<number>) {
      if (state.firstBidBitcoin === null) {
        state.firstBidBitcoin = action.payload;
      }
      state.bidBitcoin = action.payload;

      if (state.firstBidBitcoin && state.bidBitcoin) {
        state.variationBitcoin = state.bidBitcoin - state.firstBidBitcoin;
        state.variationPercentageBitcoin =
          ((state.bidBitcoin - state.firstBidBitcoin) / state.firstBidBitcoin) *
          100;
      }
    },
    alterBestBidPriceEthereum(state, action: PayloadAction<number>) {
      if (state.firstBidEthereum === null) {
        state.firstBidEthereum = action.payload;
      }
      state.bidEthereum = action.payload;

      if (state.firstBidEthereum && state.bidEthereum) {
        state.variationEthereum = state.bidEthereum - state.firstBidEthereum;
        state.variationPercentageEthereum =
          ((state.bidEthereum - state.firstBidEthereum) /
            state.firstBidEthereum) *
          100;
      }
    },
    alterBestBidPriceSolana(state, action: PayloadAction<number>) {
      if (state.firstBidSolana === null) {
        state.firstBidSolana = action.payload;
      }
      state.bidSolana = action.payload;

      if (state.firstBidSolana && state.bidSolana) {
        state.variationSolana = state.bidSolana - state.firstBidSolana;
        state.variationPercentageSolana =
          ((state.bidSolana - state.firstBidSolana) / state.firstBidSolana) *
          100;
      }
    },
    alterBestBidPriceDogecoin(state, action: PayloadAction<number>) {
      if (state.firstBidDogecoin === null) {
        state.firstBidDogecoin = action.payload;
      }
      state.bidDogecoin = action.payload;

      if (state.firstBidDogecoin && state.bidDogecoin) {
        state.variationDogecoin = state.bidDogecoin - state.firstBidDogecoin;
        state.variationPercentageDogecoin =
          ((state.bidDogecoin - state.firstBidDogecoin) /
            state.firstBidDogecoin) *
          100;
      }
    },
  },
});

export const {
  alterBestBidPriceBitcoin,
  alterBestBidPriceEthereum,
  alterBestBidPriceSolana,
  alterBestBidPriceDogecoin,
} = bidsSlice.actions;

export default bidsSlice.reducer;
