import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const EmailForm = () => {
  const form = useRef();
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [experience, setExperience] = useState("");

  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xp1q71a",
        experience,
        form.current,
        "BjGNpFwiBFSMby4Qd"
      )
      .then(
        () => {
          setIsSendingEmail(true);
          setExperience("");
          form.current.reset();
        },
        (error) => {
          if (error.text === "The recipients address is empty") {
            setHasError(true);
            setErrorMessage("You must complete the email field");
          }

          if (experience === "") {
            setHasError(true);
            setErrorMessage("You must select an experience");
          }

          setTimeout(() => {
            setHasError(false);
          }, 3000);
        }
      );

    setTimeout(() => {
      setIsSendingEmail(false);
    }, 3000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography sx={{ color: "white" }}>Test Deeplinking</Typography>
      <Box
        sx={{
          backgroundColor: "white",
          p: 4,
          my: 2,
        }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            type="email"
            name="form_email"
            label="Email"
            variant="outlined"
          />

          <FormControl sx={{ my: 2 }}>
            <InputLabel id="demo-simple-select-label">
              Select experience
            </InputLabel>
            <Select
              label="Select experience"
              onChange={handleChange}
              value={experience}
            >
              <MenuItem value={"template_93ifrbr"}>Email - App</MenuItem>
              <MenuItem value={"template_5cs3vsm"}>
                Email - App - Screen
              </MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type="submit" sx={{ my: 1 }}>
            Send Email
          </Button>
        </form>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSendingEmail}
        severity="success"
        variant="filled"
        message="Email sended"
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={hasError}
        severity="error"
        variant="filled"
        message={errorMessage}
      />
    </Box>
  );
};
