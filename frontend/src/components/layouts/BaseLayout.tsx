import type { ReactElement } from 'react'
import { NavigationHeader } from './NavigationHeader'

export default function BaseLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <NavigationHeader />
      <main>{children}</main>
    </>
  )
}
