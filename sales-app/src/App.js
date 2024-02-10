import './style/App.css';
import * as React from 'react';
import Card from './Card'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="app">
      <div className='app__body'></div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Card></Card>
        </Container>
      </React.Fragment>
    </div >
  );
}

export default App;
