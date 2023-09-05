import React, { useContext, useState } from 'react'
import { Context} from './context';
import EmptyTextArea from './EmptyTextArea';
import './style/AnswerContainer.css';
// import questions from './questions.json'

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import DeleteIcon from '@mui/icons-material/Delete';


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


    // const [textValue, setTextValue] = useState("");
    function handleSubmit(e) {
        // // Prevent the browser from reloading the page
        // e.preventDefault();

        // // Read the form data
        // const form = e.target;
        // const formData = new FormData(form);

        // // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });

        // // Or you can work with it as a plain object:
        // const formJson = Object.fromEntries(formData.entries());
        console.log("formJson");
    }
    return (
        <div className="answer__container">

            <Container maxWidth="lg">
                <div className="answer__extracted">
                    <Typography variant="h5" animation="wave" >{extractedQuestions.length == 0 ? <Skeleton /> : extractedQuestions[extractedQuestions.length - 1]}</Typography>
                </div>

                <form method="post" onSubmit={handleSubmit}>
                    <div className="answer__area">
                        <EmptyTextArea />
                    </div>
                    <div className="answer__options">
                        <Stack spacing={2} direction="row">
                            <Button variant="text" style={{ color: theme.status.start }} onClick={extractQuestion} >Start</Button>
                            <Button variant="text" style={{ color: theme.status.restart }} onClick={ResetQuestions}> Restart</Button>
                            <Button variant="text" style={{ color: theme.status.upload }} onClick={NewQuestions}> Upload </Button>
                            <Button type='reset'>
                                <DeleteIcon fontSize='medium' style={{ color: 'red' }} />
                            </Button>
                        </Stack>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default AnswerContainer