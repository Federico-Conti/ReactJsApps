import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post';


/*Material UI Icons */
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

//Firebase
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]); //da importare

    useEffect(() => {

        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
            );

    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Federico Conti',
            description: 'this a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };



    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text" />
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
            {posts.map(({ id, data: { name, description, message, photoUrl } }) =>
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            )}

            {/* <Post name='Federico Conti'
            description='Thi is a test'
            message="Yes that's pretty cool, man  that's look so clean !!" /> */}

        </div>
    )
}

export default Feed