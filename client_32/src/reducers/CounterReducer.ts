import type { CounterType } from "../actions/CounterAction";

const counterReducer = (state: number = 0, action: CounterType) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
