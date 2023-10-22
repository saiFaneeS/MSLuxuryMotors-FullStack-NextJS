import React, { useState, useEffect } from "react";
import styles from "./posts.module.css";
import CreatePost from "../CreatePost/CreatePost";
import PostCard from "../PostCard/PostCard";
import { useFirebase } from "@/context/firebase";
import { Box } from "@mui/material";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const firebase = useFirebase();

  const handleGetAllPosts = () => {
    try {
      firebase.getAllPosts().then((posts) => setPosts(posts.docs));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetAllPosts();
  }, []);

  const handleRefresh = (eventId) => {
    setPosts((prev) => prev.filter((card) => card.id !== eventId));
  };

  return (
    <>
      <div className={styles.allPosts}>
        <CreatePost fetchUpdatedData={handleGetAllPosts} />
        <div className={styles.posts}>
          <div className={styles.titleBar}>
            <h2 className={styles.title}>All Cars ({posts.length})</h2>
          </div>
          {posts.length > 0 ? (
            posts.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  id={post.id}
                  {...post.data()}
                  refresh={handleRefresh}
                  fetchUpdatedData={handleGetAllPosts}
                />
              );
            })
          ) : (
            <Box sx={{ textAlign: "center" }}>No Posts Yet.</Box>
          )}
        </div>
      </div>
    </>
  );
};

export default Posts;
