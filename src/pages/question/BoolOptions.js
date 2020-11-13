import React  from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    padding: 15px;
    cursor: pointer;
    border: 1px solid #ccc;
    margin: 4px;
`;

export default function BoolOptions({question, setAnswer}) {

    return (
        <div>

            <Label>
                <input type="radio" checked={question.answer === true}
                       onChange={(e) => setAnswer(true)}/>

                Sant
            </Label>
            <Label>
                <input type="radio" checked={question.answer === false}
                       onChange={(e) => setAnswer(false)}/>

                Falskt
            </Label>

        </div>
    );

}