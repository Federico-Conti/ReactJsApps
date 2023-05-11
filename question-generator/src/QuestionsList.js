import React from 'react'
import questions from './questions.json';
import './QuestionsList.css';
import Container from '@mui/material/Container';
function QuestionsList() {
  return (
    <div className="questionList__container">
      <Container maxWidth="sm">
        <ol>
          {questions.map((question) => (
            <li key={question.id}>{question.question}</li>
          ))}
        </ol>
      </Container>
    </div>
  )
}

export default QuestionsList