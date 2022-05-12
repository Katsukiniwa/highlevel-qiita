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

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        Accept: '*/*',
      },
      mode: 'cors',
      credentials: 'include',
      body: formData,
    })
      .then((e) => {
        e.json().then((result) => {
          const user = JSON.parse(localStorage.getItem('profile') as string)
          user.icon = result.icon
          localStorage.setItem('profile', JSON.stringify(user))
          alert('success')
        })
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
          <div className="my-2">
            <p>user_id: {user.id}</p>
          </div>

          <div className="my-2">
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

          <div className="my-2">
            <button
              onClick={() => handleClick()}
              className="my-2 px-4 py-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
            >
              更新
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
