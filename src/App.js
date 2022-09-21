import './App.css';
import {useEffect, useState} from "react";

import {getUsers} from "./services/userService";
import User from "./Components/User/User";
import {getPosts} from "./services/postsService";
import Post from "./Components/Post/Post";
import {getComments} from "./services/commentsService";
import Comment from "./Components/Comment/Comment";

function App() {

  let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value);
            })
    },[]);

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts()
            .then(value => {
                let splice = value.splice(0, 10);
                setPosts(splice);
            })
    },[]);

    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments()
            .then(value => {
                let splice = value.splice(0, 10);
                setComments(splice);
            })

    }, []);


    return (
        <div className="App">
            <h1>Current information</h1>
            <div className={'usersAndPosts wrap'}>
                <div className={'users block'}>
                    <h2>Users:</h2>
                    {
                        users.map(value => <User item={value} key={value.id}/>)
                    }
                </div>
                <div className={'posts block'}>
                    <h2>Posts:</h2>
                    {
                        posts.map(value => <Post item={value} key={value.id}/>)
                    }
                </div>
            </div>
            <div className={'allComments wrap'}>
                <div className={'comments block'}>
                    <h2>Comments</h2>
                    {
                        comments.map(value => <Comment item={value} key={value.id}/>)

                    }
                </div>
            </div>

        </div>
    );
}

export default App;
