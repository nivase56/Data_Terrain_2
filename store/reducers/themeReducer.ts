// store/reducers/themeReducer.ts
import { TOGGLE_THEME } from '../types/themeTypes';

interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

const themeReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default themeReducer;
