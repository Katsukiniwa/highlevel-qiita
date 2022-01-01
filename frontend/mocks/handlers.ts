import { rest, RestRequest } from 'msw';

const novels = [...Array(12)].map((_, index) => ({ id: `00${index}`, title: `sample 00${index}` }));

const latestNovels = [...Array(4)].map((_, index) => ({ id: `00${index}`, title: `sample 00${index}` }));

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username, password } = req.body as any;

    if (password === 'password') {
      return res(
        ctx.cookie('remember_token', username),
        ctx.json({ message: 'success login' }),
      )
    } else {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Failed to login' }),
      )
    }
  }),

  rest.get('/questions', (req, res, ctx) => {
    console.log('called')
    res(ctx.json(novels))
  }),

  rest.get('/questions/latest', (req, res, ctx) => res(
    ctx.json(latestNovels),
  )),

  rest.get('/users/1', (req, res, ctx) => res(
    ctx.json({
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      username: 'John Maverick',
      firstName: 'John',
      lastName: 'Maverick',
    }),
  )),

  rest.get('/users/2', (req, res, ctx) => res(
    ctx.json({
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      username: 'Katsuki Niwa',
      firstName: 'Katsuki',
      lastName: 'Niwa',
    }),
  )),
];
