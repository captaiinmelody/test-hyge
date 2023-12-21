import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PortfolioItem {
  thumbnail: string;
  category: number[];
  title: string;
  description: string;
  categories?: Array<any>;
}

interface PortfolioState {
  portfolioItems: PortfolioItem[];
}

const initialState: PortfolioState = {
  portfolioItems: [],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPortfolioItems: (state, action: PayloadAction<PortfolioItem[]>) => {
      state.portfolioItems = action.payload;
    },
  },
});

export const { setPortfolioItems } = portfolioSlice.actions;

export default portfolioSlice.reducer;
