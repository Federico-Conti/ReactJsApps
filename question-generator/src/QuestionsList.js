
import React, { useContext } from 'react';
import { Context } from './context'
import './QuestionsList.css';

import Container from '@mui/material/Container';

function QuestionsList() {
  
  const [questionsList,SetQuestionsList] = useContext(Context);

  return (
    <div className="questionList__container">
      <Container maxWidth="sm">
        <ol>
          {questionsList.map((questions) => (
            <li>{questions.question}</li>
          ))}
        </ol>
      </Container>
    </div>
  )
}

export default QuestionsList