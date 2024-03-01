import { PokemonDetail } from '@/types'

export const getChartRandomData = async () => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000))
  const data = [
    {
      name: 'Page A',
      uv: 4000 * Math.random(),
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000 * Math.random(),
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000 * Math.random(),
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780 * Math.random(),
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890 * Math.random(),
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390 * Math.random(),
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 1890 * Math.random(),
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page H',
      uv: 2390 * Math.random(),
      pv: 3800,
      amt: 2500,
    },
  ]

  // throw new Error('random error')

  return data
}

export const getCustomers = async () => {
  const res = await fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json())

  await new Promise((resolve) => setTimeout(resolve, Math.random() * 4000))

  return res as {
    id: number
    name: string
    email: string
  }[]
}

export const getPokemonList = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json())

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return res as {
    count: number
    next: string
    previous: string
    results: {
      name: string
      url: string
    }[]
  }
}

export const getPokemonDetail = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, id * 300))

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json())

  return res as PokemonDetail
}

export const getCategories = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const res = await fetch('http://localhost:3000/categories', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json())

  return res as {
    id: number
    name: string
    name_en: string
    icon: string
  }[]
}

export const getCategoryById = async (id: number) => {
  const res = await fetch(`http://localhost:3000/categories/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json())

  return res as {
    id: number
    name: string
    name_en: string
    icon: string
  }
}

export const getQuestions = async () => {
  const res = await fetch('http://localhost:3000/questions', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json())

  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000))

  return res.filter((_: any, index: number) => index < 6) as {
    id: number
    title: string
    content: string
  }[]
}

export const getQuestionById = async (id: number) => {
  const res = await fetch(`http://localhost:3000/questions/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json())

  // FIXME
  res.postedByMe = false

  return res as {
    id: number
    title: string
    content: string
    postedByMe: boolean
  }
}

export const getQuestionsByCategoryId = async (id: number) => {
  const res = await fetch(`http://localhost:3000/categories/${id}/questions`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json())

  // FIXME
  res.postedByMe = false

  return res as {
    id: number
    title: string
    content: string
    postedByMe: boolean
  }[]
}
