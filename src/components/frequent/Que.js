import React from 'react';
import Frequent from './Frequent';

const Que = () => {
  const questions = [
    'What is React?',
    'How do I create a new React project?',
    'What is JSX?',
    'How do I pass props to a component?',
    'What is the state in React?'
  ];

  return (
    <div className="app-container">
      <Frequent
        questions={questions}
        buttonLabel="View All Questions"
        buttonLink="/questions"
      />
    </div>
  );
}

export default Que;
