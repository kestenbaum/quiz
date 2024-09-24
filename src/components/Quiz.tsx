import {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/useTypedSelector";
import {AddToCorrectQuestion} from "../store/reducer/reducerQuestions";
import QuizItem from "./QuizItem";


const Quiz: FC<Quiz> = ({countSteps}) => {
    const dispatch = useDispatch();
    const [currentStep, setCurrentStep] = useState<number>(0);
    const dataQuestions  = useAppSelector(state => state.dataQuestions.questions);
    function handleSelectVariant (index: number)  {
        setCurrentStep(prevState => prevState + 1)
        countSteps(currentStep)
        if (index === question.current) {
            dispatch(AddToCorrectQuestion(1))
        }
    }

    function getQuizItem (array: Questions[], length: number) {
        let dataItems:Questions[] = []
        for (let i = 0; i < length; i++) {
            let randomElement = array[Math.floor(Math.random() * array.length)]
            dataItems.length !== length && dataItems.push(randomElement)
        }
        return dataItems;
    }

    const percentage = Math.round(currentStep / dataQuestions.length * 100)
    const questionsLimit = getQuizItem(dataQuestions, 10)
    const question = questionsLimit[currentStep]

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
                items={question}
                onClickVariable={handleSelectVariant}
            />
        </div>
    );
};

export default Quiz;