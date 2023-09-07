import React from 'react'
import { createTheme } from '@mui/material/styles';
import { grey, green, lightBlue, deepOrange, blue, purple, blueGrey, deepPurple } from '@mui/material/colors';


const theme = createTheme({
    status: {
        start: lightBlue[600],
        restart: grey[600],
        upload: grey[600],
        uploadFile: grey[500],
        appGridSide: grey[50],
        appGridCentral: lightBlue[50],
        tutorialGrid: grey[50],

    },
});


export { theme }