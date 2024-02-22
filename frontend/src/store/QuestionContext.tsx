import { createContext, Dispatch, ReactElement, useReducer } from 'react'
import {
  QuestionActionType,
  QuestionReducer,
  QuestionState,
} from '../module/question/reducer/questionReducer'

export const QuestionContext = createContext<QuestionState>({
  isLoading: false,
  questions: [],
  error: null,
})

export const QuestionUpdateContext = createContext<Dispatch<QuestionActionType>>(() => {})

export const initialAuthenticationState = { isLoading: false, questions: [], error: null }

export function QuestionContextProvider({ children }: { children: ReactElement }) {
  const [questions, questionDispatch] = useReducer(QuestionReducer, initialAuthenticationState)

  return (
    <QuestionContext.Provider value={questions}>
      <QuestionUpdateContext.Provider value={questionDispatch}>
        {children}
      </QuestionUpdateContext.Provider>
    </QuestionContext.Provider>
  )
}
