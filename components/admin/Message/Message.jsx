import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Delete, Mail, Phone } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { useFirebase } from "@/context/firebase";
import { useNotification } from "@/context/notificationContext";
import styles from "./Message.module.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Message({
  name,
  email,
  phone,
  message,
  msgId,
  handleRefresh,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const firebase = useFirebase();
  const notification = useNotification();

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(msgId);
    try {
      await firebase.deleteMessage(msgId);
      console.log("message deleted");
      handleRefresh(msgId);
      notification.success("Message Deleted");
    } catch (error) {
      console.error("error deleting message:", error);
      // notification.error("");
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "100%", marginBottom: "2em" }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1em",
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{ display: "flex", gap: "0.5em" }}
          variant="h5"
          color="var(--brandColor)"
        >
          <Avatar
            sx={{
              height: "1.5em",
              width: "1.5em",
              backgroundColor: "var(--brandColor)",
            }}
          />
          {name}
        </Typography>
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
              flexWrap: "wrap",
            }}
          >
            <Mail sx={{ height: "1em" }} /> {email}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
              flexWrap: "wrap",
            }}
          >
            <Phone sx={{ height: "1em" }} /> {phone}
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" onClick={handleDelete}>
          <Delete
            sx={[
              { transition: "0.1s" },
              {
                "&:hover": {
                  color: "crimson",
                },
              },
            ]}
          />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{message}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
