import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import hydrateReducer from "./reducer";

// redux toolkit을 이용해 store를 설정합니다.
const store = configureStore({
  reducer: hydrateReducer,
  // logger를 사용하지 않는다면 .concat(logger)를 건너뛰면 됩니다.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

const makeStore = (context: Context) => store;

// App state와 redux에 대해 정의해줍니다.
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

// next redux wrapper를 이용한 wrapper를 만들어 줍니다.
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
