import BaseLayout from '../../components/layouts/BaseLayout'
import { ReactElement, useEffect, useState } from 'react'
import Head from 'next/head'

export default function Dashboard() {
  const [user, setUser] = useState<any>({})
  const [icon, setIcon] = useState<File | null>()

  const handleClick = () => {
    const formData = new FormData()

    formData.append('user[name]', user.name)
    formData.append('user[icon]', icon as Blob)

    fetch(`http://localhost:3005/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        Accept: '*/*',
      },
      mode: 'cors',
      credentials: 'include',
      body: formData,
    })
      .then((e) => {
        alert(e.body)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('profile') as string)
    setUser(user)
  }, [])

  return (
    <>
      <Head>
        <title>ダッシュボード</title>
        <meta name="description" content="dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8">
        <section>
          <h1>{user.name}</h1>
          <p>{user.id}</p>

          <div>
            <input
              type="file"
              onChange={(e) => {
                const result = e.target.files
                if (result != null) {
                  setIcon(result.item(0))
                }
              }}
            />
          </div>

          <div>
            <button onClick={() => handleClick()}>update profile</button>
          </div>
        </section>
      </div>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
