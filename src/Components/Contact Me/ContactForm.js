import React, { useState } from "react";
import {
  Grid,
  Container,
  FormControl,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import useValidate from "../../hooks/useValidate";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

axios.defaults.headers.post["Content-Type"] = "application/json";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    inputRef: nameInputRef,
    onChangeHanler: onChangeNameHanler,
    onBlurHandler: onBlurNameHandler,
    hasError: nameHasError,
    isInputValid: isNameInputValid,
  } = useValidate((text) => {
    if (text.trim().length > 0) return true;
    return false;
  });
  const {
    inputRef: emailInputRef,
    onChangeHanler: onChangeEmailHanler,
    onBlurHandler: onBlurEmailHandler,
    hasError: emailHasError,
    isInputValid: isEmailInputValid,
  } = useValidate((text) => {
    if (text.trim().length > 0 && text.includes("@") && text.includes("."))
      return true;
    return false;
  });
  const {
    inputRef: textInputRef,
    onChangeHanler: onChangeTextHanler,
    onBlurHandler: onBlurTextHandler,
    hasError: textHasError,
    isInputValid: isTextInputValid,
  } = useValidate((text) => {
    if (text.trim().length > 0) return true;
    return false;
  });

  const onSubmitHandler = () => {
    if (!isFormValid) {
      return;
    }
    setIsLoading(true);
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredText = textInputRef.current.value;
    axios
      .post("https://formsubmit.co/ajax/adamhd930@gmail.com", {
        name: enteredName,
        email: enteredEmail,
        text: enteredText,
      })
      .then((res) => {
        console.log(res);
        textInputRef.current.value = "";
        emailInputRef.current.value = "";
        nameInputRef.current.value = "";
        setIsLoading(false);
        navigate("/greeting-email");
      });
  };

  const isFormValid = isNameInputValid && isEmailInputValid && isTextInputValid;
  return (
    <Container maxWidth="lg">
      <Button
        onClick={() => navigate("/")}
        startIcon={<ArrowBackIcon />}
        sx={{ marginTop: "20px", color: "black" }}
        variant="text"
      >
        <b>Back To Home</b>
      </Button>
      <Typography sx={{ margin: "10px 0 10px 0" }} variant="h3">
        Contact Me
      </Typography>
      <Typography variant="h6" gutterBottom>
        Tell me about your ideas & requirments
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: "10px" }}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              onChange={onChangeNameHanler}
              onBlur={onBlurNameHandler}
              inputRef={nameInputRef}
              sx={{ width: "60%", margin: "auto" }}
              label="Name"
            />
            {nameHasError && (
              <Typography
                align="center"
                sx={{ color: "red", marginTop: "10px" }}
                variant="subtitle2"
              >
                Please enter your name.
              </Typography>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              inputRef={emailInputRef}
              onChange={onChangeEmailHanler}
              onBlur={onBlurEmailHandler}
              sx={{ width: "60%", margin: "auto" }}
              label="Email"
              placeholder="example@gmail.com"
            />
            {emailHasError && (
              <Typography
                align="center"
                sx={{ color: "red", marginTop: "10px" }}
                variant="subtitle2"
              >
                Please enter a valid Email.
              </Typography>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              inputRef={textInputRef}
              onChange={onChangeTextHanler}
              onBlur={onBlurTextHandler}
              sx={{ width: "60%", margin: "auto" }}
              label="Tell me..."
              multiline
              rows={6}
              placeholder="Tell me your requirments & ideas"
            />
            {textHasError && (
              <Typography
                align="center"
                sx={{ color: "red", marginTop: "10px" }}
                variant="subtitle2"
              >
                Please enter something us to know about.{" "}
              </Typography>
            )}
            <Button
              onClick={onSubmitHandler}
              sx={{ margin: "25px auto", width: "10%" }}
              type="submit"
              variant="contained"
              disabled={!isFormValid || isLoading}
            >
              Submit
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ContactForm;
