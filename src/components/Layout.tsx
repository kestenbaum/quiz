import React, {FC, useState} from 'react';
import Quiz from "./Quiz";
import {useAppSelector} from "../hooks/useTypedSelector";
import Result from "./Result";

const Layout: FC = () => {
    {/*---- get questions ----*/}
    const dataQuestions = useAppSelector(state => state.dataQuestions.questions)

    {/*---- get state steps quiz ----*/}
    const [steps, setSteps] = useState<number>(0)

    {/*---- functions ----*/}
    const getStep = (value: number) => {
        setSteps(value => value + 1)
    }

    return (
        <div className='layout'>
            {steps !== dataQuestions.length ? <Quiz props={getStep}/> : <Result />}
        </div>
    );
};

export default Layout;