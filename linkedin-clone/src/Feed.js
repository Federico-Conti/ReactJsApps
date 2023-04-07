import React from 'react'
import './Feed.css'
import InputOption from './InputOption'

/*Material UI Icons */
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
function Feed() {
    return <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type='subm'>Send</button>
                </form>
            </div>
            <div className="input__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOption Icon={VideoLibraryIcon} title='Video' color='#E7A33E' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
            </div>
        </div>

        {/*Posts*/}

        
    </div>

}

export default Feed