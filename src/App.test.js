import { act, render, screen } from '@testing-library/react';
import App from './App';
import MultipleOptions from './pages/question/MultipleOptions';
import BoolOptions from './pages/question/BoolOptions';
import React from 'react';
import { fireEvent, waitFor } from '@testing-library/dom';

test('renders the title', () => {

    render(<App/>);
    const linkElement = screen.getByText(/QuiziQuizi/i);
    expect(linkElement).toBeInTheDocument();

});


test('starting the game', async () => {

    render(<App/>);

    await waitFor(() => expect(screen.queryByText(/Starta Spelet/i)).toBeInTheDocument());
    fireEvent.click(screen.getByText('Starta Spelet'));
    await waitFor(() => expect(screen.queryByText(/Nästa/i)).toBeInTheDocument());

    const textElement = screen.getByText('Nästa');

    expect(textElement).toBeInTheDocument();

});


test('not answering question', async () => {

    render(<App/>);

    await waitFor(() => expect(screen.queryByText(/Starta Spelet/i)).toBeInTheDocument());
    fireEvent.click(screen.getByText('Starta Spelet'));
    await waitFor(() => expect(screen.queryByText(/Nästa/i)).toBeInTheDocument());


    fireEvent.click(screen.getByText('Nästa'));
    await waitFor(() => expect(screen.queryByText(/Chansa om du inte kan!/i)).toBeInTheDocument());

    const textElement = screen.getByText('Chansa om du inte kan!');
    expect(textElement).toBeInTheDocument();

});

test('renders all options in bool question', () => {

    let question = {
        'category':          'Animals',
        'type':              'boolean',
        'difficulty':        'easy',
        'question':          'Kangaroos%20keep%20food%20in%20their%20pouches%20next%20to%20their%20children.',
        'correct_answer':    'False',
        'incorrect_answers': ['True']
    };

    render(<BoolOptions question={question} setAnswer={() => true}/>);

    const linkElement1 = screen.getByText(/Sant/i);
    expect(linkElement1).toBeInTheDocument();

    const linkElement2 = screen.getByText(/Falskt/i);
    expect(linkElement2).toBeInTheDocument();

});


test('renders all questions in multiple choice question', () => {

    let question = {
        'category':          'Science%20%26%20Nature',
        'type':              'multiple',
        'difficulty':        'medium',
        'question':          'What%20is%20the%20atomic%20number%20of%20the%20element%20Strontium%3F',
        'correct_answer':    '38',
        'incorrect_answers': ['73', '47', '11']
    };

    render(<MultipleOptions question={question} setAnswer={() => true}/>);

    const linkElement1 = screen.getByText(/47/i);
    expect(linkElement1).toBeInTheDocument();

    const linkElement2 = screen.getByText(/73/i);
    expect(linkElement2).toBeInTheDocument();

    const linkElement3 = screen.getByText(/11/i);
    expect(linkElement3).toBeInTheDocument();

});
