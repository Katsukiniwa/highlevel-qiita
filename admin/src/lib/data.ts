export const getCategories = async () => {
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
    created_at: Date,
    updated_at: Date,
  }[]
}

export const getQuestions = async () => {
  const res = await fetch('http://localhost:3000/questions', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())

  return res as {
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
