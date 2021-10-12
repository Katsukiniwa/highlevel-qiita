import { Login } from "../type/login";

const START_LOGIN = "START_LOGIN" as const;
const SUCCESS_LOGIN = "SUCCESS_LOGIN" as const;
const FAIL_LOGIN = "FAIL_LOGIN" as const;

const startLoginAction = () => {
  return { type: START_LOGIN };
};

const successLoginAction = () => {
  return { type: SUCCESS_LOGIN, payload: true };
};

const failLoginAction = (error: Error) => {
  return { type: FAIL_LOGIN, payload: error };
};

export const actions = {
  startLoginAction,
  successLoginAction,
  failLoginAction,
};

export type LoginActionType =
  | ReturnType<typeof startLoginAction>
  | ReturnType<typeof successLoginAction>
  | ReturnType<typeof failLoginAction>;

export type LoginState = { isLoading: boolean; login: boolean, error: Error | null }

export const loginReducer = (state: LoginState, action: LoginActionType): LoginState => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        isLoading: true,
        login: false,
        error: null
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        isLoading: false,
        login: action.payload,
        error: null
      };
    case FAIL_LOGIN:
      return {
        ...state,
        isLoading: false,
        login: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
