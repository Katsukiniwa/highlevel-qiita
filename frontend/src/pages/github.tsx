import { useState, useEffect } from 'react'

const fetchGraphQL = async (text: string, variables?: any) => {
  console.dir(process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN)
  const GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  return await response.json()
}

export default function GitHubPage() {
  // We'll load the name of a repository, initially setting it to null
  const [name, setName] = useState(null)

  // When the component mounts we'll fetch a repository name
  useEffect(() => {
    let isMounted = true
    fetchGraphQL(`
      query RepositoryNameQuery {
        # feel free to change owner/name here
        repository(owner: "facebook" name: "relay") {
          name
        }
      }
    `)
      .then((response) => {
        // Avoid updating state if the component unmounted before the fetch completes
        if (!isMounted) {
          return
        }
        const data = response.data
        setName(data.repository.name)
      })
      .catch((error) => {
        console.error(error)
      })

    return () => {
      isMounted = false
    }
  }, [])

  // Render "Loading" until the query completes
  return (
    <div className="App">
      <header className="App-header">
        <p>{name != null ? `Repository: ${name}` : 'Loading'}</p>
      </header>
    </div>
  )
}
