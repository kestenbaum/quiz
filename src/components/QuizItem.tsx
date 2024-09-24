import React, {FC} from 'react';

const QuizItem: FC<QuizItem> = ({items, onClickVariable}) => {
    return (
        <div className='quiz-item'>
            <h2 className='quiz-title'>Вопрос: {items.question} </h2>
            <ul className='quiz-list'>
                {items.variables.map(function (element, idx){
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