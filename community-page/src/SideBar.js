import React from 'react';
import "./Sidebar.css";

import background from './images/background.jpg'
import { Avatar } from '@mui/material';

function Sidebar(){

    const recentItem = (topic)=>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src={background} alt=""/>
                <Avatar className='sidebar__avatar' />
                <h2>UserName</h2>
                <h4>irulethisworldlol@gmail.com</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">50</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">30</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('Seller')}
                {recentItem('Makes great notes')}
                {recentItem('Programmer')}
            </div>
        </div>
    )
}

export default Sidebar;