import { createSlice, current } from '@reduxjs/toolkit';

const layoutsInfo = createSlice({
  name: 'layoutsInfo',
  initialState: { layout: 'landing' },
  reducers: {
    switchLayouts: (state, action) => {
      const layout = action.payload;
      state.layout = layout;
      console.log(current(state));
    },
  },
});

export const { switchLayouts } = layoutsInfo.actions;

export default layoutsInfo.reducer;
