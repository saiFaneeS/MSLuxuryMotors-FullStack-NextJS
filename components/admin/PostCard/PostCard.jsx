import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./card.module.css";
import { Box } from "@mui/material";
import { DeleteForever, Edit } from "@mui/icons-material";
import { useFirebase } from "@/context/firebase";
import EditPanel from "../EditPanel/EditPanel";
import { useNotification } from "@/context/notificationContext";

const PostCard = (props) => {
  const [editPanel, setEditPanel] = useState(false);
  const [url, setUrl] = useState(null);

  const firebase = useFirebase();
  const notification = useNotification();

  useEffect(() => {
    firebase.getImageUrl(props.imageUrl).then((url) => setUrl(url));
  }, []);

  const deleteItem = async (e) => {
    e.preventDefault();
    try {
      await firebase.deletePost(props.id);
      notification.success("Post Deleted");
      props.handleGetAllPosts();
    } catch (error) {
      console.error("Error deleting item:", error);
      //return notification.error("");
    }
  };

  return (
    <Box className={styles.main}>
      {editPanel && (
        <EditPanel setEditPanel={setEditPanel} item={props} id={props.id} />
      )}
      <div className={styles.container}>
        <div className={styles.img}>
          {url ? (
            <Image
              src={url}
              quality="10"
              width={150}
              height={100}
              alt={props.carName}
            />
          ) : (
            ""
          )}
        </div>
        <div className={styles.info}>
          <h3 className={styles.postTitle}>{props.carName}</h3>
          <p className={styles.price} style={{ margin: "1em 0" }}>
          AED {props.perDay}<span> / Hour</span>
          </p>
          <p className={styles.price}>
          AED {props.perMonth}<span> / Day</span>
          </p>
        </div>
      </div>
      <div className={styles.tools}>
        <Edit
          onClick={() => {
            setEditPanel(!editPanel);
            console.log(props.id);
          }}
        />
        <DeleteForever onClick={deleteItem} sx={{ marginLeft: "10px" }} />
      </div>
    </Box>
  );
};

export default PostCard;
