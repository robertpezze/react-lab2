import React, { useMemo } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    padding: 15px;
    cursor: pointer;
    border: 1px solid #ccc;
    margin: 4px;
`;

export default function MultipleOptions({question, setAnswer}) {

    let options = useMemo(() => [...question.incorrect_answers, question.correct_answer], [question]);


    return (
        <div>

            {options.map((option, index) => (
                <Label key={index}>
                    <input type="radio" checked={question.answer === option}
                           onChange={(e) => setAnswer(option)}/>

                    {unescape(option)}
                </Label>
            ))}


        </div>
    );

}