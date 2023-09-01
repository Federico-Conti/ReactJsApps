
import React, { useState, useContext } from 'react';
import './style/UploadFile.css';
import { Context } from './context'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';


//theme factory set in likeColors
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './likeColors';

function UploadFile() {

    const [questionsList, SetQuestionsList, questionsToBeExtracted, SetQuestionsToBeExtracted, extractedQuestions, SetExtractedQuestions] = useContext(Context);

    let fileReader;

    const onChange = e => {
        let file = e.target.files;
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file[0]);
    };

    const checkEmptyLines = array => {
        for (let index = 0; index < array.length; index++) {
            if (array[index] == "")
            array.splice(index, 1);
        }
        return array;
    };


    const handleFileRead = e => {
        let content = fileReader.result;
        content = content.trim();
        let arr = content.split('\r\n').filter((str) => str !== "");
        SetQuestionsList([...arr]);
        SetQuestionsToBeExtracted([...arr]);

    };

    const message = "questions must be separated by a line item"
    return (
        <div className="uplodaile__container">
            <Tooltip title={message}>
                <label htmlFor="upload-questions">
                    <input style={{ display: "none" }} id="upload-questions" type="file" name="upload-questions" onChange={onChange} />
                    <Fab
                      style={{ backgroundColor: theme.status.uploadFile, color:"white" }}
                        size="medium"
                        component="span"
                        aria-label="add"
                        variant="extended"

                    >
                        <AddIcon />
                        <p>Upload Questions</p>

                    </Fab>
                </label>
            </Tooltip>
        </div>
    )
}

export default UploadFile