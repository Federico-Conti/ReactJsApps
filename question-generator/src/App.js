import AnswerContainer from './AnswerContainer';
import QuestionsList from './QuestionsList';
import QuestionsExtractedList from './QuestionsExtractedList';
import React, { useEffect, useState} from 'react'
import { Context } from './context'
import './App.css';
import questions from './questions.json';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function App() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const [questionsList, SetQuestionsList] = useState([...questions]);
  const [extractedQuestions, SetExtractedQuestions] = useState([]);

  return (
    <div className="app">
      <Context.Provider value={[questionsList,SetQuestionsList,extractedQuestions,SetExtractedQuestions]}>
        <Grid container spacing={3}>
          <Grid item xs >
            <Item >
              <h4>Da Estrarre</h4>
              <QuestionsList/>
            </Item>
          </Grid>
          <Grid item xs/*="auto"*/>
            <Item>
              <AnswerContainer/>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <h4>Estratte</h4>
              <QuestionsExtractedList />
            </Item>
          </Grid>
        </Grid>
      </Context.Provider>
    </div>
  );
}

export default App;
