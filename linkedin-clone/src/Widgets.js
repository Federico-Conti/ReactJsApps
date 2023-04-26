import React from 'react'
import './Widgets.css'

import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newArticle("React is back","Top news - 999 renders")}
            {newArticle("Coronavirus: IT updates","Top news - 886")}
            {newArticle("Tesla hits new hights","Cars & auto -300")}
            {newArticle("Is Redux too good?","Code - 123 renders")}
            {newArticle("Sky tg24","25 aprile, #Meloni: “La destra in Parlamento è incompatibile con il fascismo")}
            {newArticle("Tesla Owners Silicon Valley","The Tesla Roadster and Cybertruck are CGI IRL.")}
            {newArticle("OpenAi","We're launching the OpenAI Bug Bounty Program")}
        </div>
    );
}

export default Widgets