
import React, { useState, useContext } from 'react';
import './style/UploadFile.css';
import { Context } from './context'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//theme factory set in likeColors
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './likeColors';

function UploadFile() {

    const [questionsList, SetQuestionsList, questionsToBeExtracted, SetQuestionsToBeExtracted, extractedQuestions, SetExtractedQuestions] = useContext(Context);
    const [error, setError] = useState(false);

    let fileReader;
    const validTextExtensions = ['txt', 'csv', 'json', 'rtf', 'xml', 'md', 'html', 'markdown', 'plist'];

    function isTextFile(file) {
        let filename = file.name;
        let fileExtension = filename.split('.').pop().toLowerCase();
        return validTextExtensions.includes(fileExtension);
    }

    const onChange = e => {
        let file = e.target.files;
        if (!isTextFile(file[0])) { setError(true); return; };

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
        let arr = content.split('\n').filter((str) => str !== "");
        SetQuestionsList([...arr]);
        SetQuestionsToBeExtracted([...arr]);

    };


    const message = "questions must be separated by a carriage return or a blank line ";

    return (
        <div className="uplodaile__container">

            <Tooltip title={message}>

                <label htmlFor="upload-questions">
                    <input style={{ display: "none" }} id="upload-questions" type="file" accept=".txt, .csv, .json, .rtf, .html, .md, .markdown, .plist, .csv, .xml" name="upload-questions" onChange={onChange} />
                    <Fab
                        style={{ backgroundColor: theme.status.uploadFile, color: "white" }}
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
            {error && (
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error" style={{ margin: '15px', borderRadius: '15px', alignContent: 'center' }}>
                        file extension not permitted
                    </Alert>
                </Stack>
            )}
        </div>
    )
}

export default UploadFile