import type { AccountAction } from "../actions/AccountAction";
import type { AccountType } from "../actions/AccountAction";
type StateType = {
  registered: boolean;
  account: AccountType;
};
const initialState: StateType = {
  registered: false,
  account: { email: "", password: "" },
};
const accountReducer = (
  state: StateType = initialState,
  action: AccountAction
) => {
  switch (action.type) {
    case "REGISTER":
      console.log("Reducer nhận REGISTER với payload:", action.payload);
      return {
        ...state,
        registered: false,
        account: action.payload,
      };
    case "LOGIN":
      console.log("Reducer nhận REGISTER với payload:", action.payload);
      return {
        ...state,
        registered: true,
        account: action.payload,
      };
    default:
      return state;
  }
};
export default accountReducer;
