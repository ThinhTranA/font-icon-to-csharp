import { createContext } from 'react';

export interface IAppActions {
  type: 'set_font_filename';
  filename: string;
}

export interface IAppState {
  fontFileName: string;
}

export interface IAppContextProps {
  fontFilename: string;
  updateFontFilename: (filename: string) => void;
}

export const initialAppState: IAppState = {
  fontFileName: '',
};

const AppContext = createContext<IAppContextProps>({
  fontFilename: '',
  updateFontFilename: (filename: string) => {},
});

export const AppContextConsumer = AppContext.Consumer;
export const AppContextProvider = AppContext.Provider;
export default AppContext;

// import React, { createContext, useReducer } from 'react';
// import AppReducer from './AppReducer';

// type AppContextProviderProps = {
//   children: React.ReactNode;
// };
// export const initialState = { filename: '' };

// export interface IAppProps{
//   fontFilename: string;
//   updateFontFilename: (filename: string) => void;
// }

// //https://www.youtube.com/watch?v=hYXFutvueA8&ab_channel=TheNerdyCanuck

// export const AppContext = createContext<IAppProps>({
//   fontFilename: '',
//   updateFontFilename: (filename: string) => {
//     dispatch({
//       type: 'SET_FILENAME',
//       filename: filename,
//     });
//   }
// });

// export const AppContextProvider = ({ children }: AppContextProviderProps) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   const setFileName = (filename: string) => {
//     dispatch({
//       type: 'SET_FILENAME',
//       filename: filename,
//     });
//   };

//   return (
//     <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
//   );
// };
