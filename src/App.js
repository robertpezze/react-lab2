import React, { useState, useRef, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import AppContext from './AppContext';
import Start from './pages/Start';
import Result from './pages/Result';
import Question from './pages/Question';
import Loading from './Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    width: 30%;
    margin: 20px auto;
`;

function App() {

    let routerRef = useRef();

    //Reducer for the questions
    function reducer(state, action) {

        switch (action.type) {
            case 'set':
                return action.data;

            case 'answer':
                let newState = [...state];
                newState[action.index].answer = action.answer;

                return newState;
            default:
                throw new Error();
        }
    }

    let [questions, setQuestions] = useReducer(reducer, []);
    let [isLoading, setIsLoading] = useState(false);


    //Reset the questions and start over
    const reset = () => {
        setQuestions({type:'set', data:[]});
        routerRef.current.history.push('/');
    };

    return (
        <Router ref={routerRef}>

            <AppContext.Provider value={{questions, setQuestions, setIsLoading, reset}}>
                <ContainerDiv>

                    <h1>
                        <FontAwesomeIcon icon={faListAlt} /> QuiziQuizi
                    </h1>

                    <Switch>
                        <Route path="/" exact component={Start}/>
                        <Route path="/question/:question" exact component={Question}/>
                        <Route path="/result" exact component={Result}/>
                    </Switch>
                </ContainerDiv>

                <Loading isLoading={isLoading}/>
                <ToastContainer/>
                
            </AppContext.Provider>
        </Router>
    );
}

export default App;
