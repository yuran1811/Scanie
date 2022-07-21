import { configureStore } from '@reduxjs/toolkit';
import scoresReducer from './scoresSlice';

export default configureStore({
  reducer: {
    scores: scoresReducer,
  },
});
