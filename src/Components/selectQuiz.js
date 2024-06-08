import React, { useState } from "react";
// material-ui
import { getQuiz } from "../store/action/quizAction.js";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';
const subject = [
  { title: "JavaScript", id: 1 },
  { title: "ReactJS", id: 2 },
  { title: "NodeJS", id: 3 },
];

//SelectQuiz component allows users to choose a quiz subject, and includes buttons for accessing documentation and the leaderboard.

function SelectQuiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState();
  const handleSubmitButton = () => {
    dispatch(getQuiz(selectedSubject?.id, navigate));
  };
  const handleLeaderBoard = () => {
    navigate("/leaderBoard");
  };
 const handleDocumention=()=>{
  navigate("/documentation");
 }
  return (
    <>
      <Container>
        <Grid container justifyContent="center" spacing={3}>
          <Grid
            item
            sm={10}
            md={9}
            sx={{ mt: { md: 9, xs: 2.5 }, mb: { md: 9, xs: 2.5 } }}
          ></Grid>
          <Grid item xs={10} sx={{ mb: -37.5 }}>
            <Card sx={{ mb: 6.25 }} elevation={4}>
              <CardContent sx={{ p: 4 }}>
                <Grid container spacing={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={3} sx={{ mt: 0 }}>
                      <Button
                        style={{ textTransform: "none" }}
                        onClick={handleDocumention}
                      >
                        {" "}
                        Documentation
                        <AssignmentIcon />
                      </Button>
                    </Grid>
                    <Grid item xs={7} sx={{ mt: 0 }}></Grid>
                    <Grid item xs={2} sx={{ mt: 0 }}>
                      <Button
                        style={{ textTransform: "none", textAlign: "right" }}
                        onClick={handleLeaderBoard}
                      >
                        {" "}
                        Leader Board
                        <ArrowRightAltIcon />
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -1 }}>
                    <InputLabel
                      style={{
                        textAlign: "center",
                        marginBottom: 4,
                        color: "#808080",
                        fontWeight: 500,
                      }}
                    >
                      Quiz Application
                    </InputLabel>
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={subject}
                      getOptionLabel={(option) => option.title}
                      onChange={(event, newValue) => {
                        setSelectedSubject(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Quiz.."
                          //   placeholder="Favorites"
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -1 }}>
                    <Button
                      style={{ textTransform: "none" }}
                      onClick={handleSubmitButton}
                    >
                      Get Quiz
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default SelectQuiz;
