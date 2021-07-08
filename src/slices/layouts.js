import { createSlice } from '@reduxjs/toolkit';

const layoutsInfo = createSlice({
  name: 'layoutsInfo',
  initialState: { layout: 'landing' },
  reducers: {
    switchLayout: (state, action) => {
      const layout = action.payload;
      state.layout = layout;
    },
  },
});

export const { switchLayout } = layoutsInfo.actions;

export default layoutsInfo.reducer;
