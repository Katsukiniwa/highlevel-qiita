import { createContext, Dispatch, ReactChild, useReducer } from "react"
import { loginReducer, LoginActionType, LoginState } from "../module/authentication/login"

export const AuthenticationContext = createContext<LoginState>({ isLoading: false, login: false, error: null })

export const LoginContext = createContext<Dispatch<LoginActionType>>(() =>{})

export const initialAuthenticationState = { isLoading: false, login: false, error: null }

export function AuthenticationContextProvider({ children }: { children: ReactChild }) {
  const [loginState, loginDispatch] = useReducer(loginReducer, initialAuthenticationState)

  return (
    <AuthenticationContext.Provider value={loginState}>
      <LoginContext.Provider value={loginDispatch}>
        {children}
      </LoginContext.Provider>
    </AuthenticationContext.Provider>
  )
}
