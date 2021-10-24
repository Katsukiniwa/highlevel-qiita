import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { QuestionContext, QuestionUpdateContext } from "../../../store/QuestionContext"
import { actions, QuestionState } from "../reducer/questionReducer"
import { Question } from "../type/question"

export const useQuestionFetch = (): [QuestionState, () => void] => {
  const questions = useContext(QuestionContext)
  const dispatch = useContext(QuestionUpdateContext)
  const [refetchIndex, setRefetchIndex] = useState(0)

  const refetch = () => {
    setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1)
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!dispatch) {
        return
      }
      
      dispatch(actions.startFetchQuestionAction())

      // axios.get<Question[]>("/novels")
      axios.get<Question[]>(`${process.env.NEXT_PUBLIC_API_HOST}/questions`)
        .then(res => {
          return res.data
        })
        .then(data => {
          dispatch(actions.successFetchQuestionAction(data))
        })
        .catch((e) => {
          dispatch(actions.failFetchQuestionAction(e))
        })
    }

    fetchData()
  }, [dispatch, refetchIndex])

  return [questions, refetch]
}
