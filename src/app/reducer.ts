import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// combine reducers with redux-toolkit
const combinedAppReducer = combineReducers({
  // reducers go here
});

// strong type for reducer
// 이 과정을 거치지 않는 다면 나중에 selector에서 state의 type이 제대로 나타나지 않습니다.
type AppState = ReturnType<typeof combinedAppReducer>;

const hydrateReducer = (state: AppState | undefined, action: AnyAction) => {
  // hydrate 동안의 액션을 custom define 해줍니다.
  // 이 예제에서는 기존의 state와 동기화 해줍니다.
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  }
  return combinedAppReducer(state, action);
};

export default hydrateReducer;
