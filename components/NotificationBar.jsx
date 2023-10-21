import React from "react";
import { useContext } from "react";
import NotificationContext from "context/notificationContext";
import { Alert, Snackbar } from "@mui/material";

const NotificationBar = () => {
  const notificationCtx = useContext(NotificationContext);

  return (
    notificationCtx.notification !== null && (
      <div className={notificationCtx.notification}>
        <Alert
          sx={{
            position: "fixed",
            bottom: "2em",
            left: "2em",
            boxShadow: "1px 2px 10px rgba(0,0,0,0.1)",
          }}
          severity="success"
        >
          {notificationCtx.notificationText}
        </Alert>
      </div>
    )
  );
};

export default NotificationBar;
