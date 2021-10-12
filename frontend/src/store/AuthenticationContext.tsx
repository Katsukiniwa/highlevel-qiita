import { createContext, Dispatch, ReactChild, useReducer } from "react"
import { loginReducer, LoginActionType, LoginState } from "../module/authentication/login"
// import { logoutReducer, LogoutActionType } from "../module/authentication/logout"

export const AuthenticationContext = createContext<LoginState>({ isLoading: false, login: false, error: null })

//@ts-ignore
export const LoginContext = createContext<Dispatch<LoginActionType>>(null)
//@ts-ignore
// export const LogoutContext = createContext<Dispatch<LogoutActionType>>(null)

const initialAuthenticationState = { isLoading: false, login: false, error: null }

export function AuthenticationContextProvider({ children }: { children: ReactChild }) {
  const [authentication, login] = useReducer(loginReducer, initialAuthenticationState)
  // const [_authentication2, logout] = useReducer(logoutReducer, initialAuthenticationState)

  return (
    <AuthenticationContext.Provider value={authentication}>
      <LoginContext.Provider value={login}>
        {children}
        {/* <LogoutContext.Provider value={logout}>
        </LogoutContext.Provider> */}
      </LoginContext.Provider>
    </AuthenticationContext.Provider>
  )
}
