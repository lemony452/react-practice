import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// import { createStore } from "redux";

// couterSclice의 액션들을 컴포넌트에서 사용하기 위해 actions를 export해준다.
// export const counterActions = CounterSlice.actions;
// export const authActions = AuthSlice.actions;

// 하나의 스토어는 하나의 리듀서를 포인팅하기 때문에 configureStore의 reducer 속성값에는 통합된 하나의 리듀서를 가지고 있다.
export const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// reducer는 immutable한 state. 즉 state의 불변성을 보장하기 위해 재정의가 필요하다 => state값의 볼륨이 클수록 state들을 관리하기 까다롭다.
// 리듀서를 실행하는 action 타입의 식별자를 사용할 때, 착오를 방지하기 위해서는 상수로 따로 관리해줘야 하는 번거로움이 있다.
// 따라서 다양한 state를 관리하는 리듀서로 쪼개어 액션을 객체로 정의할 수 있는 redux-toolkit의 slice를 사용

// const CounterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       toggle: state.toggle,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       toggle: state.toggle,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       toggle: !state.toggle,
//     };
//   }

//   return state;
// };

// const store = createStore(CounterReducer);
