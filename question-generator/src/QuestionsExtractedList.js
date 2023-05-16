import React, { useContext, useEffect, useState } from 'react';
import { Context } from './context'
import './QuestionsExtractedList.css';
import Container from '@mui/material/Container';


function QuestionsExtractedList() {
  const [questionsList, SetQuestionsList, questionsToBeExtracted, SetQuestionsToBeExtracted, extractedQuestions, SetExtractedQuestions] = useContext(Context);



  return (
    <div className="questionExtractedList__container">
      <Container maxWidth="sm">
        <ol>
          {extractedQuestions.map((questions) => (
            <li>{questions}</li>
          ))}
        </ol>
      </Container>
    </div>
  )
}

export default QuestionsExtractedList