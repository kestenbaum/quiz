export interface IQuestions {
    id: number
    question: string
    variables: string[]
    current: number
}

export interface IAction {
    type: string
    payload: any
}