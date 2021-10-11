import { LoginState } from "../../login";

const START_LOGOUT = "START_LOGOUT" as const;
const SUCCESS_LOGOUT = "SUCCESS_LOGOUT" as const;
const FAIL_LOGOUT = "FAIL_LOGOUT" as const;

const startLogoutAction = () => {
  return { type: START_LOGOUT };
};

const successLogoutAction = () => {
  return { type: SUCCESS_LOGOUT, payload: true };
};

const failLogoutAction = () => {
  return { type: FAIL_LOGOUT };
};

export type LogoutActionType =
  | ReturnType<typeof startLogoutAction>
  | ReturnType<typeof successLogoutAction>
  | ReturnType<typeof failLogoutAction>;

  export const logoutReducer = (state: LoginState, action: LogoutActionType): LoginState => {
    switch (action.type) {
      case START_LOGOUT:
        return {
          ...state,
          isLoading: true,
          login: false,
        };
      case SUCCESS_LOGOUT:
        return {
          ...state,
          isLoading: false,
          login: action.payload,
        };
      case FAIL_LOGOUT:
        return {
          ...state,
          isLoading: false,
          login: false,
        };
      default:
        return state;
    }
  };
