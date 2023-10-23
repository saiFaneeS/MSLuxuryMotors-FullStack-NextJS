import React, { useState } from "react";
import styles from "./editPanel.module.css";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useFirebase } from "@/context/firebase";
import { useNotification } from "@/context/notificationContext";

const EditPanel = ({ setEditPanel, id, item, imageUrl }) => {
  const [newItem, setNewItem] = useState(item);
  const { carName, perDay, perMonth, description } = newItem;

  const firebase = useFirebase();
  const notification = useNotification();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      firebase.editPost({
        id,
        carName,
        perDay,
        perMonth,
        description,
        imageUrl,
      });
      item.fetchUpdatedData();
      setEditPanel(false);
      notification.success("Post Updated");
    } catch (err) {
      console.log(err);
      // notification.error("");
    }
  };

  return (
    <>
      <div className={styles.editPanel}>
        <div className={styles.titleBar}>
          <h2 className={styles.title}>Edit {item.carName}</h2>
          <Close
            onClick={() => setEditPanel(false)}
            sx={{ cursor: "pointer", color: "#aaa", fontSize: "2em" }}
          />
        </div>
        <form className={styles.editForm}>
          <input
            type="text"
            placeholder="Car Name"
            value={newItem.carName}
            onChange={(e) =>
              setNewItem({ ...newItem, carName: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price Per Day"
            value={newItem.perDay}
            onChange={(e) => setNewItem({ ...newItem, perDay: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price Per Month"
            value={newItem.perMonth}
            onChange={(e) =>
              setNewItem({ ...newItem, perMonth: e.target.value })
            }
          />
          <textarea
            type="number"
            placeholder="Car Description"
            rows={5}
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
          ></textarea>

          {/* <input
            accept="image/"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={(e) =>
              setNewItem({ ...newItem, imageUrl: e.target.files[0] })
            }
          />
          <label htmlFor="select-image">
            <Button
              variant="outlined"
              color="secondary"
              component="span"
              sx={{ width: "100%", marginBottom: "1em" }}
            >
              Upload New Image
            </Button>
          </label> */}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: "100%" }}
            onClick={handleSubmit}
            disabled={
              !newItem.carName ||
              !newItem.perDay ||
              !newItem.perMonth ||
              !newItem.description
              // ||
              // !newItem.imageUrl
            }
          >
            EDIT
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditPanel;
