import { createSlice } from '@reduxjs/toolkit';

const panelsInfo = createSlice({
  name: 'panelsInfo',
  initialState: { isOpen: false },
  reducers: {
    landingShowHeaderPanel: (state, action) => {
      const isOpen = action.payload;
      state.isOpen = isOpen;
    },
    landingShowContentPanel: (state, action) => {
      const isOpen = action.payload;
      state.isOpen = isOpen;
    },
    landingShowFooterPanel: (state, action) => {
      const isOpen = action.payload;
      state.isOpen = isOpen;
    },
  },
});

export const { landingShowHeaderPanel } = panelsInfo.actions;

export default panelsInfo.reducer;
