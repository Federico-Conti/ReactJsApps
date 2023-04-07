import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {
    const recentItem = (topic) => (
        < div className = "sidebar__recentItem" >
            <spam className="sidebar__hash">#</spam>
            <p>{topic}</p>
        </div >
    );

return <div className='sidebar'>

    <div className='sidebar__top'>
        <img src='https://images.unsplash.com/photo-1680691675114-a9b4b358af4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='' />
        <Avatar className='sidebar__avatar' src='https://avatars.githubusercontent.com/u/91850761?s=96&v=4'/>
        <h2>Federico Conti</h2>
        <h4>federicoconti1702@gmail.com</h4>
    </div>

    <div className='sidebar__stats'>
        <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,457</p>
        </div>
        <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,547</p>
        </div>
    </div>

    <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
    </div>

</div>
}

export default Sidebar
