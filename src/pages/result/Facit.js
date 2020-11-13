import React  from 'react';
import AppContext from '../../AppContext';
import OptionFacit from '../question/OptionFacit';


export default function Facit() {

    const {questions} = React.useContext(AppContext);

    return (
        <div>

            <h2>Facit</h2>

            {questions.map((question, index) => (

                <div key={index} style={{textAlign: 'left'}}>

                    <h4>{index}. {unescape(question.question)}</h4>

                    {[...question.incorrect_answers, question.correct_answer].map((option, optionIndex) => (
                        <OptionFacit key={optionIndex} question={question} option={option}/>
                    ))}

                </div>
            ))}
        </div>
    );

}