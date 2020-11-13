import React  from 'react';
import AppContext from '../../AppContext';
import styled from 'styled-components';

const OptionDiv = styled.div`
    padding: 15px;
    display: block;
`;

export default function Facit() {

    const {questions} = React.useContext(AppContext);

    //Get the correct color depending on answer
    const getBackgroundColor = (question, option) => {

        if (option === question.correct_answer) {

            if (option === question.answer) {
                return '#88ff88';
            } else {
                return '#ccffcc';
            }

        } else if (option === question.correct_answer) {

            return '#ccffcc';

        } else if (question.answer === option) {

            return '#ff8888';

        }

    };

    return (
        <div>

            <h2>Facit</h2>

            {questions.map((question, index) => (
                <div key={index} style={{textAlign: 'left'}}>
                    <h4>
                        {index}. {unescape(question.question)}
                    </h4>

                    {[...question.incorrect_answers, question.correct_answer].map((option, optionIndex) => (
                        <OptionDiv key={optionIndex} style={{backgroundColor: getBackgroundColor(question, option)}}>
                            {unescape(option)}
                        </OptionDiv>
                    ))}
                </div>
            ))}
        </div>
    );

}