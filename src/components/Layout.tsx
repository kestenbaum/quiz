import {FC, useState} from 'react';
import {useAppSelector} from "../hooks/useTypedSelector";
import Quiz from "./Quiz";
import Result from "./Result";

const Layout: FC = () => {
    const dataQuestions = useAppSelector(state => state.dataQuestions.questions)
    const [countSteps, setCountSteps] = useState<number>(0)

    function getCountsStep ()  {
        setCountSteps(prevState => prevState + 1)
    }

    return (
        <div className='layout'>
            {countSteps !== dataQuestions.length ? <Quiz countSteps={getCountsStep}/> : <Result />}
        </div>
    );
};

export default Layout;