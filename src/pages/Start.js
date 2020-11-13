import React, { useCallback, useEffect, useState } from 'react';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    height: 40px;
    width: 100%;
    font-size: 20px;
`;

const Select = styled.select`
    height: 40px;
    width:  100%;
    margin: 20px 0;
`;

export default function Start() {

    let [amount, setAmount]     = useState(5);
    let [category, setCategory] = useState('');

    const {questions, setQuestions, setIsLoading} = React.useContext(AppContext);

    //Fetch questions from api
    const loadQuestions = useCallback(() => {

        return fetch('http://api.heby.nu?amount=' + amount + '&category=' + category + '&encode=url3986').then((res) => {
            return res.json();
        });

    }, [amount, category]);

    useEffect(() => {

        setIsLoading(true);
        let isMounted = true;

        loadQuestions().then((res) => {

            if (isMounted) {
                setQuestions({type: 'set', data: res.results});
                setIsLoading(false);
            }

        });

        return () => {
            isMounted = false;
        };

    }, [amount, category, loadQuestions]);

    return (
        <div>
            <div>

                <br/>
                <br/>
                <br/>

                <div>
                    Hur många frågor vill ha?
                </div>

                <Select value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </Select>
            </div>
            <div>

                <div>
                    Välj kategori
                </div>

                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </Select>
            </div>

            {questions.length > 0 && <Link to="/question/1">
                <Button value="Starta Spelet">Starta Spelet</Button>
            </Link>}
        </div>
    );

}