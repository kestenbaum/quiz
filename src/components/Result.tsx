import React, {FC} from 'react';
import {useAppSelector} from "../hooks/useTypedSelector";

const Result: FC = () => {

    {/*---- get reducers ----*/}
    const dataQuestions = useAppSelector(state => state.dataQuestions.questions)
    const dataCorrect  = useAppSelector(state => state.dataQuestions.correct)
    const dataRank = useAppSelector(state => state.dataQuestions.dataRank)

    {/*---- create user rank ----*/}
    let user;

    {/*---- checked rank user ----*/}
    if (dataCorrect <= 3) {
        user = dataRank[0]
    } else if (dataCorrect >= 7) {
        user = dataRank[2]
    } else {
        user = dataRank[1]
    }

    return (
        <div className='result'>
            <h2>Правильных ответов {dataCorrect} из {dataQuestions.length}</h2>
            <div>Ваш результат: {user}</div>
            <a href='/' className='reset'>Пройти заного</a>
        </div>
    );
};

export default Result;