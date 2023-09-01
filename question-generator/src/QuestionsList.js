
import React, { useContext } from 'react';
import { Context } from './context'
import './style/QuestionsList.css';

import Container from '@mui/material/Container';

function QuestionsList() {

  const [questionsList, SetQuestionsList, questionsToBeExtracted, SetQuestionsToBeExtracted,] = useContext(Context);

  return (
    <div className="questionList__container">
      <Container maxWidth="sm">
        <ol>
          {questionsToBeExtracted.map((questions) => (
            <li>{questions}</li>
          ))}
        </ol>
      </Container>
    </div>
  )
}

export default QuestionsList