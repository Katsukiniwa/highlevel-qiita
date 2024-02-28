import { PokemonDetail } from "@/types"

export const getPokemonList = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return res as {
    count: number,
    next: string,
    previous: string,
    results: {
      name: string,
      url: string
    }[]
  }
}

export const getPokemonDetail = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, id * 300));

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  return res as PokemonDetail
}

export const getCategories = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const res = await fetch('http://localhost:3000/categories', {
    method: "GET",
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  return res as {
    id: number,
    name: string,
    name_en: string,
    icon: string,
  }[]
}

export const getCategoryById = async (id: number) => {
  const res = await fetch(`http://localhost:3000/categories/${id}`, {
    method: "GET",
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  return res as {
    id: number,
    name: string,
    name_en: string,
    icon: string,
  }
}

export const getQuestions = async () => {
  const res = await fetch('http://localhost:3000/questions', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  return res.filter((_: any, index: number) => index < 6) as {
    id: number,
    title: string,
    content: string
  }[]
}

export const getQuestionById = async (id: number) => {
  const res = await fetch(`http://localhost:3000/questions/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  // FIXME
  res.postedByMe = false

  return res as {
    id: number,
    title: string,
    content: string
    postedByMe: boolean
  }
}

export const getQuestionsByCategoryId = async (id: number) => {
  const res = await fetch(`http://localhost:3000/categories/${id}/questions`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  // FIXME
  res.postedByMe = false

  return res as {
    id: number,
    title: string,
    content: string
    postedByMe: boolean
  }[]
}
