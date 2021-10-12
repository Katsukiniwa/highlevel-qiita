import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext, AuthenticationContext } from "../../../../store/AuthenticationContext";
import { actions, LoginState } from "../reducer/loginReducer";

export const useLogin = (): [LoginState, () => void] => {
  const loginState = useContext(AuthenticationContext);
  const dispatch = useContext(LoginContext);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = () =>
    setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);

  useEffect(() => {
    const runLogin = async () => {
      if (!dispatch) {
        return
      };

      dispatch(actions.startLoginAction({username: 'kn', password: 'password'}));

      try {
        await axios.post('/login', {username: 'kn', password: 'password'})
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
  }, [refetchIndex]);

  return [loginState, refetch];
}
