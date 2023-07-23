import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets(){
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return <div className='widgets'>
        <div className='widgets__header'>
            <h2>Community News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Ted finally sold all his 20 shoes!","Top news - 500 readers")}
        {newsArticle("Check out the new goods for sale","Buy and Sell - 40 readers")}
        {newsArticle("Look out for these cool notes for your next exam!","Stationary - 6000 readers")}
        {newsArticle("Fill in your wardrobes with these amazing clothings","Fashion - 5000 readers")}
    </div>
}

export default Widgets;