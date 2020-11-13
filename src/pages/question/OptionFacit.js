import React  from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const OptionDiv = styled.div`
    padding: 15px;
    display: block;
`;

export default function OptionFacit({question, option}) {

    let backgroundColor = '#fff';
    let icon = null;


    if (option === question.correct_answer) {

        if (option === question.answer) {
            backgroundColor = '#88ff88';
            icon = faCheck;
        } else {
            backgroundColor = '#ccffcc';
        }

    } else if (question.answer === option) {

        backgroundColor = '#ff8888';
        icon = faTimes;

    }
console.log(question);
    return (
        <OptionDiv style={{backgroundColor: backgroundColor}}>
            {icon && <FontAwesomeIcon icon={icon} />}{" "}
            {unescape(option)}
        </OptionDiv>
    );

}