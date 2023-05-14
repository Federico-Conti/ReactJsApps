import React, { useContext, useState } from 'react'
import { Context } from './context';
import EmptyTextArea from './EmptyTextArea';
import './AnswerContainer.css';
import questions from './questions.json'

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


function AnswerContainer() {

     const [questionsToBeExtracted, SetQuestionsToBeExtracted,extractedQuestions, SetExtractedQuestions] = useContext(Context);

    const extractQuestion = () => {
        const questionAux = questionsToBeExtracted;
        if (questionAux.length == 0)
        console.log("");
      
        else {
            const randomIndex = Math.floor(Math.random() * questionAux.length);
            const randomQuestion = questionAux[randomIndex];
            extractedQuestions.push(randomQuestion);
            SetExtractedQuestions(extractedQuestions)
            questionsToBeExtracted.splice(randomIndex, 1);
            SetQuestionsToBeExtracted([...questionsToBeExtracted]);
       }
    };


    const ResetQuestions = () => {
        SetExtractedQuestions([]);
        SetQuestionsToBeExtracted([...questions]);
    };


    return (
        <div className="answer__container">
            <Container maxWidth="sm">
                <div className="answer__extracted">
                    <Typography variant="h5" animation="wave" >{extractedQuestions.length == 0 ? <Skeleton /> : extractedQuestions[extractedQuestions.length-1].question}</Typography>
                </div>
                <div className="answer__area">
                    <EmptyTextArea />
                </div>
                <div className="answer__options">
                    <Stack spacing={2} direction="row">
                        <Button variant="text" color="primary" onClick={extractQuestion} >Estrai</Button>
                        <Button variant="text" color="primary" onClick={ResetQuestions}> Riparti</Button>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default AnswerContainer