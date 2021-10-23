import { Question } from "../type/question";

const START_FETCH_QUESTION = "START_FETCH_QUESTION" as const;
const SUCCESS_FETCH_QUESTION = "SUCCESS_FETCH_QUESTION" as const;
const FAIL_FETCH_QUESTION = "FAIL_FETCH_QUESTION" as const;

const startFetchQuestionAction = () => {
  return { type: START_FETCH_QUESTION };
};

const successFetchQuestionAction = (question: Question[]) => {
  return { type: SUCCESS_FETCH_QUESTION, payload: question };
};

const failFetchQuestionAction = (error: Error) => {
  return { type: FAIL_FETCH_QUESTION, payload: error };
};

export const actions = {
  startFetchQuestionAction,
  successFetchQuestionAction,
  failFetchQuestionAction,
};

export type QuestionActionType =
  | ReturnType<typeof startFetchQuestionAction>
  | ReturnType<typeof successFetchQuestionAction>
  | ReturnType<typeof failFetchQuestionAction>;

export type QuestionState = { isLoading: boolean; questions: Question[], error: Error | null }

export const QuestionReducer = (state: QuestionState, action: QuestionActionType): QuestionState => {
  switch (action.type) {
    case START_FETCH_QUESTION:
      return {
        ...state,
        isLoading: true,
        questions: [],
        error: null
      };
    case SUCCESS_FETCH_QUESTION:
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
        error: null
      };
    case FAIL_FETCH_QUESTION:
      return {
        ...state,
        isLoading: false,
        questions: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
