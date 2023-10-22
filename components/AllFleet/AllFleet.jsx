import React, { useEffect, useState } from "react";
import styles from "./AllFleet.module.css";
import { useFirebase } from "@/context/firebase";
import Card from "../Card/Card";

const AllFleet = () => {
  const firebase = useFirebase();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase.getAllPosts().then((data) => setPosts(data.docs));
  }, []);

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Our Limousines</h2>
      <p className={styles.subtitle}></p>
      <p className={styles.desc}>
        The Epitome of Luxury, from classic sedans to stretch limousines,
        explore our curated selection of vehicles designed to exceed your
        expectations.
      </p>
        <div className={styles.cards}>
          {posts.length === 0 ? (
            <>
              <Card />
              <Card />
              <Card />
            </>
          ) : (
            posts.map((post) => {
              return <Card key={post.id} id={post.id} {...post.data()} />;
            })
          )}
        </div>
    </div>
  );
};

export default AllFleet;
