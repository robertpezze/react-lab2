import React  from 'react';
import AppContext from '../AppContext';
import Facit from './result/Facit';
import styled from 'styled-components';

const Button = styled.button`
    height: 40px;
    width: 100%;
    font-size: 20px;
`;

const ResultDiv = styled.div`
    margin: 30px;
    font-size: 40px;
`;

export default function Result({history}) {

    const {questions, reset} = React.useContext(AppContext);

    //If no questions, go back to the beginning
    if (questions.length === 0) {
        history.push('/');
        return null;
    }

    //Summarize the correct answers
    let result = 0;

    questions.forEach((question, index) => {

        result += question.answer === question.correct_answer? 1:0;

    });


    return (
        <div style={{textAlign: "center"}}>

            <h1>Resultat</h1>

            <ResultDiv>
                {result} rätt av {questions.length}
            </ResultDiv>

            <Button onClick={reset}>Börja OM</Button>

            <br />
            <br />
            <br />
            <br />
            <Facit />

        </div>
    );

}