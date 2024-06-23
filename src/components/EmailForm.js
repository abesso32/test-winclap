import { Box, Button, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const sendEmail = () => {
    setIsSendingEmail(true);
    setEmail("");

    setTimeout(() => {
      setIsSendingEmail(false);
    }, 3000);
  };

  return (
    <>
      <Box
        sx={{
          my: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          width: "30%",
        }}
      >
        <TextField
          label="Write your email"
          variant="filled"
          sx={{ mb: 2, backgroundColor: "white" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" onClick={() => sendEmail()}>
          Send email by Iterable
        </Button>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSendingEmail}
        severity="success"
        variant="filled"
        message="Email sended"
      />
    </>
  );
};
