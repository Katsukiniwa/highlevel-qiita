import axios from "axios";
import { useContext, useEffect } from "react";
import { LoginContext, AuthenticationContext } from "../../../../store/AuthenticationContext";
import { actions } from "../reducer/loginReducer";

export const useLogin = (params: { username: string; password: string }) => {
  const loginState = useContext(AuthenticationContext);
  const dispatch = useContext(LoginContext);

  useEffect(() => {
    const runLogin = async () => {
      dispatch(actions.startLoginAction(params));

      try {
        await axios.post('/login', params)
        dispatch(actions.successLoginAction())
      } catch (error) {
        if (error instanceof Error) {
          dispatch(actions.failLoginAction(error))
        } else {
          throw error
        }
      }
    };

    runLogin();
  }, [dispatch, params]);

  return [loginState, dispatch];
}
