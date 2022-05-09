import { ReactElement, useContext, useEffect } from 'react'
import { LoginContext } from '../../store/AuthenticationContext'
import { NavigationHeader } from './NavigationHeader'
import { actions } from '../../module/authentication/login'

export default function BaseLayout({ children }: { children: ReactElement }) {
  const loginDispatch = useContext(LoginContext)

  useEffect(() => {
    const profile = localStorage.getItem('profile')
    if (profile == null) {
      loginDispatch(actions.logOutAction())
    } else {
      loginDispatch(actions.successLoginAction())
    }
  }, [loginDispatch])

  return (
    <>
      <NavigationHeader />
      <main>{children}</main>
    </>
  )
}
