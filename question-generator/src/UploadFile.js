
import React, { useState, useContext } from 'react';
import './UploadFile.css';
import { Context } from './context'

function UploadFile() {

    const [text, setText] = useState();
    const [questionsList, SetQuestionsList, questionsToBeExtracted, SetQuestionsToBeExtracted, extractedQuestions, SetExtractedQuestions] = useContext(Context);

    let fileReader;

    const onChange = e => {
        let file = e.target.files;
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file[0]);
    };

    const deleteLines = (string, n = 1) => {
        console.log("remove lines");
        return string.replace(new RegExp(`(?:.*?\n){${n - 1}}(?:.*?\n)`), "");
    };

    //   const cleanContent = string => {
    //     string = string.replace(/^\s*[\r\n]/gm, "");
    //     let array = string.split(new RegExp(/[\r\n]/gm));
    //     console.log(array);
    //     array.splice(0, 3);
    //     array.splice(-3);
    //     return array.join("\n");
    //   };

    const handleFileRead = e => {
        let content = fileReader.result;
        content = content.trim();
        // let text = deleteLines(content, 3);
        const arr = content.split('\r\n');
        // content = cleanContent(content);
        // … do something with the 'content' …
        SetQuestionsList([...arr]);
        SetQuestionsToBeExtracted([...arr]);

    };


    return (
        <div>  <input type="file" name="myfile" onChange={onChange} />
        </div>
    )
}

export default UploadFile