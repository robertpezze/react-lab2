import React from 'react';
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
                <input type="radio" checked={question.answer === 'True'} onChange={() => setAnswer('True')}/>
                Sant
            </Label>
            <Label>
                <input type="radio" checked={question.answer === 'False'} onChange={() => setAnswer('False')}/>
                Falskt
            </Label>

        </div>
    );

}