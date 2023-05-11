import AnswerContainer from './AnswerContainer';
import './App.css';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import QuestionsList from './QuestionsList';
function App() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="app">
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <h4>Da Estrarre</h4>
            <QuestionsList />
          </Item>
        </Grid>
        <Grid item xs="auto">
          <Item>
            <AnswerContainer />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <h4>Estratte</h4>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
