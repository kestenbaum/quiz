interface Questions {
    id: number
    question: string
    variables: string[]
    current: number
}

interface Action {
    type: string
    payload: any
}

interface QuizState {
    questions: Questions[]
    correct: number
    dataRank: string[]
}

interface Quiz {
    countSteps: (step:number) => void
}

interface QuizItem {
    items: Questions,
    onClickVariable: (index: number) => void
}