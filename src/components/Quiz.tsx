import React, {FC, useState} from 'react';
import QuizItem from "./QuizItem";
import {useAppSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AddToCorrectQuestion} from "../store/reducer/reducerQuestions";
import {IQuestions} from "../models";

interface IQuiz {
    props: (value: number) => void
}

const Quiz: FC<IQuiz> = ({props}) => {

    {/*---- functions ----*/}
    const onClickVariable = (index: number) => {
        setStep(prev => prev + 1)
        props(step)
        if (index === question.current) {
            dispatch(AddToCorrectQuestion(1))
        }
    }

    const getQuizItem = (array: IQuestions[], length: number) => {
        let dataItems:IQuestions[] = []
        for (let i = 0; i < length; i++) {
            let randomElement = array[Math.floor(Math.random() * array.length)]
            dataItems.length !== length && dataItems.push(randomElement)
        }
        return dataItems
    }

    {/*---- create dispatch ----*/}
    const dispatch = useDispatch()

    {/*---- get questions ----*/}
    const dataQuestions  = useAppSelector(state => state.dataQuestions.questions)

    {/*---- steps ----*/}
    const [step, setStep] = useState<number>(0)
    const percentage = Math.round(step / dataQuestions.length * 100)

    {/*---- get question ----*/}
    const questionsLimit = getQuizItem(dataQuestions, 10)
    const question = questionsLimit[step]

    return (
        <div className='quiz'>
            <div className='quiz-questions'>Количество вопросов: {questionsLimit.length}</div>
            <div className='progress'>
                <span
                    className='progress-line'
                    style={{width: `${percentage}%`}}>
                </span>
            </div>
            <QuizItem
                props={question}
                onClickVariable={onClickVariable}
            />
        </div>
    );
};

export default Quiz;