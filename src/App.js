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


function App() {

    let routerRef = useRef();


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



    const reset = () => {
        setQuestions({type:'set', data:[]});
        routerRef.current.history.push('/');
    };

    return (
        <Router ref={routerRef}>

            <AppContext.Provider value={{questions, setQuestions, setIsLoading, reset}}>
                <div style={{width: '30%', margin: '20px auto'}}>
                    <h1>QuiziQuizi</h1>
                    <Switch>
                        <Route path="/" exact component={Start}/>
                        <Route path="/question/:question" exact component={Question}/>
                        <Route path="/result" exact component={Result}/>
                    </Switch>
                </div>

                <Loading isLoading={isLoading}/>
                <ToastContainer/>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
