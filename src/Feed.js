import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import AddPost from "./AddPost";
import Post from "./Post";
import db from "./firebase.js";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <AddPost />
      {posts.map((thisPost) => (
        <Post
          key={thisPost.id}
          profilePic={thisPost.data.profilePic}
          image={thisPost.data.image}
          username={thisPost.data.username}
          timestamp={thisPost.data.timestamp}
          message={thisPost.data.message}
        />
      ))}
    </div>
  );
}

export default Feed;
