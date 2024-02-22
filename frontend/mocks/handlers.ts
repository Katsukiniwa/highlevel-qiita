import { http, HttpResponse } from 'msw'

const novels = [...Array(12)].map((_, index) => ({ id: `00${index}`, title: `sample 00${index}` }))

const latestNovels = [...Array(4)].map((_, index) => ({
  id: `00${index}`,
  title: `sample 00${index}`,
}))

export const handlers = [
  http.post('/login', ({ request }) => {
    const { username, password } = request.body as any

    if (password === 'password') {
      return HttpResponse.json({ message: 'success login' }, {
        headers: {
          'Set-Cookie': `remember_token=${username};`
        }
      })
    } else {
      return HttpResponse.json({ message: 'Failed to login' }, { status: 400 })
    }
  }),

  http.get('/questions', ({ request }) => {
    console.log('called')
    return HttpResponse.json(novels)
  }),

  http.get('/questions/latest', ({ request }) => {
    return HttpResponse.json(latestNovels)
  }),

  http.get('/users/1', ({ request }) => {
    return HttpResponse.json({
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      username: 'John Maverick',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),

  http.get('/users/2', ({ request }) => {
    return HttpResponse.json({
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      username: 'Katsuki Niwa',
      firstName: 'Katsuki',
      lastName: 'Niwa',
    })
  }),
]
