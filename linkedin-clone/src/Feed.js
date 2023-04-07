import React, { useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post';

/*Material UI Icons */
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function Feed() {
    const [posts, setPosts] = useState([]); //da importare

    const sendPost = e =>{
        e.preventDefault();
    }

    return <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
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
        {posts.map((post) =>
            <Post />
        )}

        <Post name='Federico Conti'
            description='Thi is a test'
            message="Yes that's pretty cool, man  that's look so clean !!" />

    </div>

}

export default Feed