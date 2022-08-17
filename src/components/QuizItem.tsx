import React, {FC} from 'react';
import {IQuestions} from "../models";

interface IQuizItem {
    props: IQuestions,
    onClickVariable: (index: number) => void
}

const QuizItem: FC<IQuizItem> = ({props, onClickVariable}) => {

    return (
        <div className='quiz-item'>
            <h2 className='quiz-title'>Вопрос: {props.question} </h2>
            <ul className='quiz-list'>
                {props.variables.map(function (element, idx){
                    return <li
                        key={element}
                        className='quiz-variable'
                        onClick={() => onClickVariable(idx)}
                    >
                        {element}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default QuizItem;