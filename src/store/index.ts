import {combineReducers, createStore} from "redux";
import {ReducerQuestions} from "./reducer/reducerQuestions";

const RootStore = combineReducers({
    dataQuestions: ReducerQuestions
})

export const store = createStore(RootStore);
export type RootState = ReturnType<typeof RootStore>;
