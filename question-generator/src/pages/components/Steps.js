import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { theme } from './../../likeColors';

const steps = [
    {
        label: 'Upload file',
        description: <div>The question file must be a valid text file.<br />
            Each question must be separated by a carriage return or blank line.</div>,
    },
    {
        label: 'Extract question',
        description:
            'With the start button a random question will be drawn.',

    },
    {
        label: 'Reply',
        description: `With the appropriate textarea you will be able to answer the extracted questions.`,
    },

];

function Steps() {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical" style={{ textAlign: 'left' }}>
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel

                            optional={
                                index === 2 ? (
                                    <Typography variant="caption" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>Last step</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent  >
                            <Typography style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                        style={{ backgroundColor: theme.status.start }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {
                activeStep === steps.length && (
                    <Paper square='false' elevation={16} sx={{ p: 1 }} style={{ textAlign: 'left' }}>
                        <Typography style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} style={{ color: theme.status.restart }}>
                            Reset
                        </Button>
                    </Paper>
                )
            }
        </Box >
    );
}

export default Steps