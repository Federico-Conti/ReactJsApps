import React from 'react'
import '../style/Tutorial.css'
import Steps from './components/Steps';
import { theme } from './../likeColors';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

function Tutorial() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className='tutorial'>
      <Container maxWidth="sx">
        <Grid container spacing={2}>
          <Grid item lg={4} sm md xs={16}>
            <Item style={{ backgroundColor: theme.status.tutorialGrid }}>
              <div className="tutorial__about">
                <Box sx={{ width: '100%', maxWidth: 500, alignContent: 'center' }}>
                  <Typography variant="h6" gutterBottom color='black'>
                    Improves Learning
                  </Typography>
                  <Typography variant="body1" gutterBottom style={{ fontWeight: '600', fontFamily: 'IBM Plex Sans, sans-serif'}}>
                    Welcome to the app that could transform your learning process!
                  </Typography>
                  <Typography variant="body1" gutterBottom style={{ fontWeight: '600', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    You will have the opportunity to make studying more engaging and effective than ever before.
                  </Typography>
                </Box>
              </div>
            </Item>
          </Grid>
          <Grid item lg={8} sm md xs={16} >
            <Item >
              <div className="tutorial__steps">
                <Steps />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Tutorial