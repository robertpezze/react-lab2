import React from 'react';
import AppContext from '../AppContext';
import BoolOptions from './question/BoolOptions';
import MultipleOptions from './question/MultipleOptions';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Button = styled.button`
    height: 40px;
    width: 100%;
    font-size: 20px;
`;

const CategoryDiv = styled.div`
    color: #777;
    font-size: 12px;
    text-align: right;
`;

export default function Question({match, history}) {

    const {questions, setQuestions} = React.useContext(AppContext);

    let questionNumber = parseInt(match.params.question);
    let question       = questions[questionNumber - 1];


    if (questions.length < 1) {
        history.push('/');
        return null;
    }

    //Change the answer in the context
    const setAnswer = (answer) => {
        setQuestions({type: 'answer', index: questionNumber - 1, answer: answer});
    }

    //Go to the next question, or the result if no more questions
    function nextQuestion() {

        if (question.answer === undefined) {
            toast('Chansa om du inte kan!');
        } else {

            if (questionNumber === questions.length) {
                history.push('/result');
            } else {
                history.push('/question/' + (questionNumber + 1));
            }

        }
    }

    return (
        <div>
            <h2>Fråga {questionNumber}</h2>
            <CategoryDiv>
                {unescape(question.category)}
                <span> ({question.difficulty})</span>
            </CategoryDiv>

            <div style={{padding: '20px'}}>{unescape(question.question)}</div>

            {question.type === 'boolean' && <BoolOptions question={question} setAnswer={setAnswer} />}

            {question.type === 'multiple' && <MultipleOptions question={question} setAnswer={setAnswer} />}

            <Button onClick={nextQuestion}>Nästa</Button>

        </div>
    );

}