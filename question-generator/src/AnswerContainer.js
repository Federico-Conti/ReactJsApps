import React, { useContext, useState } from 'react'
import { Context } from './context';
import EmptyTextArea from './EmptyTextArea';
import './style/AnswerContainer.css';
// import questions from './questions.json'

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


//theme factory set in likeColors
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './likeColors';

function AnswerContainer() {

    const [questionsList, SetQuestionsList, questionsToBeExtracted, SetQuestionsToBeExtracted, extractedQuestions, SetExtractedQuestions] = useContext(Context);

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
        SetQuestionsToBeExtracted([...questionsList]);
    };
    const NewQuestions = () => {
        SetQuestionsList([]);
        SetQuestionsToBeExtracted([]);
        SetExtractedQuestions([]);
    };

    return (

        <div className="answer__container">
            <Container maxWidth="sm">
                <div className="answer__extracted">
                    <Typography variant="h5" animation="wave" >{extractedQuestions.length == 0 ? <Skeleton /> : extractedQuestions[extractedQuestions.length - 1]}</Typography>
                </div>
                <div className="answer__area">
                    <EmptyTextArea />
                </div>
                <div className="answer__options">
                    <Stack spacing={2} direction="row">
                        <Button variant="text" style={{ color: theme.status.start }} onClick={extractQuestion} >Start</Button>
                        <Button variant="text" style={{ color: theme.status.restart }} onClick={ResetQuestions}> Restart</Button>
                        <Button variant="text" style={{ color: theme.status.upload }} onClick={NewQuestions}> Upload </Button>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default AnswerContainer