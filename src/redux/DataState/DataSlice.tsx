import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICardData } from "../../types/CardData";
import axios from "axios";

interface CardsState {
  cards: ICardData[];
}

const initialState: CardsState = {
  cards: [],
};

export const getData = createAsyncThunk<ICardData[]>("/getData", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  console.log(data);
  return data;
});

export const dataSlice = createSlice({
  name: "CardsData",
  initialState,
  reducers: {
    toogleLike: (state, action: PayloadAction<number>) => {
      const card = state.cards.find((card) => card.id === action.payload);
      if (card) {
        card.liked = !card.liked;
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((dat) => dat.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getData.fulfilled,
      (state, action: PayloadAction<ICardData[]>) => {
        // action.payload.forEach((item) => item.liked === false);
        state.cards = action.payload.map((item) => ({
          ...item,
          liked: false,
        }));
      }
    );
  },
});
export const { toogleLike, deleteItem } = dataSlice.actions;
export default dataSlice.reducer;
