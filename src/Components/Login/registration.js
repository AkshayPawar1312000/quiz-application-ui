import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { postUserData, userSingin } from "../../store/action/userAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Grid, Typography } from "@mui/material";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// Registration component allows users to Registration & Sign up by providing their details.

function Registration() {
  const userMessage = useSelector((state) => state.user.userMessage);
  const [open, setOpen] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    const singInUserData = {
      email: email,
      password: password,
    };
    if (disable) {
      dispatch(userSingin(singInUserData, navigate));
    } else {
      dispatch(postUserData(userData, navigate));
    }
  };
  const handleSignIn = () => {
    setDisable((prevDisable) => !prevDisable);
  };
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        disableBackdropClick="true"
      >
        <DialogTitle
          sx={{ m: 0, p: 2, textAlign: "center" }}
          id="customized-dialog-title"
        >
          {disable ? "Sing In" : "Registration"}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2} marginBottom={2}>
            {disable ? (
              ""
            ) : (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    label="First Name"
                    id="outlined-size-small"
                    size="small"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
              </Grid>
            )}
            {disable ? (
              ""
            ) : (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    label="Last Name"
                    id="outlined-size-small"
                    size="small"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
              </Grid>
            )}
          </Grid>
          <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  id="outlined-size-small"
                  size="small"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <TextField
                  type="password"
                  label="Password"
                  id="outlined-size-small"
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        {disable ? (
          ""
        ) : (
          <Typography style={{ textAlign: "center", color: "red" }}>
            {userMessage?.message}
          </Typography>
        )}

        <DialogActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {disable ? (
            <div style={{ marginLeft: 5 }}>
              <p>
                I'm don't any account{" "}
                <span
                  onClick={handleSignIn}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginLeft: "5px",
                  }}
                >
                  register
                </span>
              </p>
            </div>
          ) : (
            <div style={{ marginLeft: 5 }}>
              <p>
                I'm alredy member{" "}
                <span
                  onClick={handleSignIn}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginLeft: "5px",
                  }}
                >
                  sign in
                </span>
              </p>
            </div>
          )}

          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default Registration;
