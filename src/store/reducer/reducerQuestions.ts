const initialState:QuizState = {
    questions: [
        {
            id: 1,
            question: 'В чем разница между null и undefined?',
            variables: [
                'null — это «значение отсутствия значения». null — это значение, которое присваивается переменной явно, undefinded - представляет собой значение по умолчанию:\n' +
                'переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной;',
                'не имеют разницы',
                'при строгом сравнение, null приравниваеться к false, undefined к true'
            ],
            current: 0
        },{
            id: 2,
            question: ' Для чего используется оператор "&&"?',
            variables: [
                'Оператор "&&" использиваеться для проверки условия',
                'Оператор "&&" (логическое и) находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные. Он использует короткое замыкание во избежание лишних затрат',
                'Оператор "&&" устарел и больше не используеться'
            ],
            current: 1
        },{
            id: 3,
            question: ' В чем разница между операторами "==" и "==="?',
            variables: [
                'Разницы между оператором "==" и оператором "===" не существуют, после выхода ES6, они стали единтичны ',
                'Оператор "==" не используеться в js',
                'Разница между оператором "=="  и оператором "==="  состоит в том, что первый сравнивает значения после их преобразования или приведения к одному типу (Coersion), а второй — без такого преобразования.',
            ],
            current: 2
        },{
            id: 4,
            question: 'Какой из методов массива позволяет вернуть новый масив измененых элементов',
            variables: [
                'map',
                'filter',
                'sort'
            ],
            current: 0
        },{
            id: 5,
            question: 'Какое свойство применяют к строке, для удаление пробелов',
            variables: [
                'trim()',
                'reverse()',
                'split()'
            ],
            current: 0
        },{
            id:6,
            question: 'Для чего существует свойство pop()',
            variables: [
                'Свойство pop() существует для того что бы удаляить элемент в конце строки',
                'Свойство pop() устарело и больше не используеться',
                'Свойство pop() существует для того что бы удаляить элемент в конце массива',
            ],
            current: 2
        },{
            id: 7,
            question: 'Что такое диструктуризация и для чего она нужна',
            variables: [
                'Диструктуризация это метод, которое позволяет копировать обьекты',
                'Диструктуризация это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.',
                'Диструктуризация существует для удаление всех пробелов в строках'
            ],
            current: 1
        },{
            id: 8,
            question: 'Что такое ECMAScript?',
            variables: [
                'ECMAScript — это спецификация, стандарт скриптовых языков программирования, он является основой JS, поэтому любые изменения ECMAScript отражаются на JS.',
                'ECMAScript — это новый тип более типизированого языка для JS',
            ],
            current: 0
        },{
            id: 9,
            question: 'null',
            variables: [
                'a',
                'null',
                'c'
            ],
            current: 2
        },{
            id: 10,
            question: 'null',
            variables: [
                'a',
                'b',
                'null'
            ],
            current: 2
        }
    ],
    correct: 0,
    dataRank: ['Новичок', 'Опытный', 'Мастер']
}

export const ReducerQuestions = (state = initialState, action:Action) => {
    switch (action.type){
        case 'ADD':
            return {...state, correct: state.correct + action.payload}
        default: return state
    }
}

export const AddToCorrectQuestion = (payload:number) => ({type: 'ADD', payload})