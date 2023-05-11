import React from 'react'
import PropTypes from 'prop-types'
import EmptyTextArea from './EmptyTextArea';
import './AnswerContainer.css';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
function AnswerContainer(question) {

    const extracted = "";
    return (
        <div className="answer__container">
            <Container maxWidth="sm">
                <div className="answer__extracted">
                    <Typography variant="h5" animation="wave" >{extracted=="" ? <Skeleton /> : extracted}</Typography>
                </div>
                <div className="answer__area">
                    <EmptyTextArea />
                </div>
                <div className="answer__options">
                    <Stack spacing={2} direction="row">
                        <Button variant="text" color="success">Estrai</Button>
                        <Button variant="text" color="error">Azzera</Button>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default AnswerContainer