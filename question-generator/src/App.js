import AnswerContainer from './AnswerContainer';
import QuestionsList from './QuestionsList';
import QuestionsExtractedList from './QuestionsExtractedList';
import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Context } from './context'
import './style/App.css';
// import questions from './questions.json';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import UploadFile from './UploadFile';
import NavBar from './NavBar';


import { theme } from './likeColors';

function App() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  // const [hideUpload, SetHideUpload] = useState(false);
  const [questionsList, SetQuestionsList] = useState([]);
  const [questionsToBeExtracted, SetQuestionsToBeExtracted] = useState([]);
  const [extractedQuestions, SetExtractedQuestions] = useState([]);

  return (
    <div className="app">
      <Context.Provider value={[questionsList, SetQuestionsList, questionsToBeExtracted, SetQuestionsToBeExtracted, extractedQuestions, SetExtractedQuestions]}>
        <Grid container spacing={3}>
          <Grid item xs  >
            <Item style={{ backgroundColor: theme.status.grid }}>
              <h4>Questions to be extracted</h4>
              {questionsList.length == 0 ? <UploadFile /> : <QuestionsList />}
            </Item>
          </Grid>
          <Grid item xs/*="auto"*/>
            <Item style={{ backgroundColor: theme.status.grid }}>
              <AnswerContainer />
            </Item>
          </Grid>
          <Grid item xs>
            <Item style={{ backgroundColor: theme.status.grid }}>
              <h4>Questions extract</h4>
              <QuestionsExtractedList />
            </Item>
          </Grid>
        </Grid>
      </Context.Provider>
    </div>
  );
}

export default App;
