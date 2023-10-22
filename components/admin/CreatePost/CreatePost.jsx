import React, { useEffect, useState } from "react";
import styles from "./createPost.module.css";
import { Box, Button } from "@mui/material";
import { useFirebase } from "@/context/firebase";
import { useNotification } from "@/context/notificationContext";
import Image from "next/image";

const CreateOffer = (props) => {
  const [carName, setCarName] = useState("");
  const [perDay, setPerDay] = useState("");
  const [perMonth, setPerMonth] = useState("");
  const [description, setDescription] = useState("");
  const [carImage, setCarImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const firebase = useFirebase();
  const notification = useNotification();

  useEffect(() => {
    if (carImage) {
      setImageUrl(URL.createObjectURL(carImage));
    }
  }, [carImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.handleCreateNewPost(
        carName,
        perDay,
        perMonth,
        description,
        carImage
      );
      props.fetchUpdatedData();
    } catch (err) {
      console.log(err);
      // notification.error("");
    }
    setCarName("");
    setPerDay("");
    setPerMonth("");
    setDescription("");
    setCarImage(null)
    const form = document.getElementById("createForm");
    if (form) {
      form.reset();
    } 
    notification.success("Post Successfully Added");
  };

  return (
    <div className={styles.main}>
      <>
        <h2 style={{ color: "#222" }}>Create Offer</h2>
        <form className={styles.form} id="createForm">
          <input
            type="text"
            placeholder="Car Name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price Per Hour"
            value={perDay}
            onChange={(e) => setPerDay(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price Per Day"
            value={perMonth}
            onChange={(e) => setPerMonth(e.target.value)}
          />
          <textarea
            placeholder="Car Description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            accept="image/"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={(e) => setCarImage(e.target.files[0])}
          />
          <label htmlFor="select-image">
            <Button
              variant="outlined"
              color="primary"
              component="span"
              sx={{ width: "100%" }}
            >
              Upload Image
            </Button>
          </label>
          {imageUrl && carImage && (
            <Box mt={2} textAlign="center">
              <div style={{ marginBottom: "10px", letterSpacing: "1px" }}>
                PREVIEW
              </div>
              <div className={styles.preview}>
              <Image
                src={imageUrl}
                alt={""}
                height="200"
                width="300"
              />
              </div>
            </Box>
          )}
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={
              !carName || !perDay || !perMonth || !description || !carImage
            }
            sx={{ marginRight: "1em", marginTop: "1em", width: "100%" }}
          >
            ADD POST
          </Button>
          {/* <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={itemsLength >= 3 ? true : false}
          >
            ADD OFFER ({itemsLength}/3)
          </Button> */}
        </form>
      </>
    </div>
  );
};

export default CreateOffer;
