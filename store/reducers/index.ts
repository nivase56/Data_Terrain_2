// reducers/index.ts
import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  theme: themeReducer,
  // Add other reducers here
});

// Define RootState to represent the shape of your Redux store's state
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
