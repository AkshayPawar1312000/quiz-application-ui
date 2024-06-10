import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { submitQuizResult } from "../store/action/quizAction";
import { useNavigate } from "react-router-dom";

// ShowMark component displays the marks obtained by the user in the selected quiz. 

function ShowMarks() {
  const userDetails = JSON.parse(localStorage?.getItem("userDetails"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedQuizOptions = useSelector(
    (state) => state.quiz.selectedQuizOptions
  );
  console.log(selectedQuizOptions);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctQuestions, setCorrectQuestions] = useState(0);

  const handleSubmitQuizResult = () => {
    let quizName = "";
    if (selectedQuizOptions?.id === 1) {
      quizName = "JavaScript";
    } else if (selectedQuizOptions?.id === 2) {
      quizName = "React JS";
    } else if (selectedQuizOptions?.id === 3) {
      quizName = "Node JS";
    }
    const quizResult = {
      quizName: quizName,
      totalMark: totalQuestions,
      yourMark: correctQuestions,
    };
    dispatch(submitQuizResult(userDetails?._id, quizResult, navigate));
  };

  useEffect(() => {
    let count = 0;

    setTotalQuestions(selectedQuizOptions?.quizSelectedOptions.length);
    for (let quetion in selectedQuizOptions.quizSelectedOptions) {
      if (
        selectedQuizOptions.quizSelectedOptions[quetion].correctAns ===
        selectedQuizOptions.quizSelectedOptions[quetion].selectedOption
      ) {
        count++;
      }
    }
    setCorrectQuestions(count);
  }, []);
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
                  <Grid item xs={12} sm={12} sx={{ mt: -1 }}>
                    <InputLabel
                      style={{
                        textAlign: "center",
                        marginBottom: 4,
                        color: "#808080",
                        fontWeight: 500,
                      }}
                    >
                      JavaScript quiz quation & marks
                    </InputLabel>
                    {selectedQuizOptions?.quizSelectedOptions?.map(
                      (quations, index) => {
                        return (
                          <>
                            <div key={index}>
                              <Typography
                                variant="body1"
                                gutterBottom
                                style={{ textAlign: "left" }}
                              >
                                Q{index + 1}. {quations?.question}
                              </Typography>
                              <Typography
                                variant="body2"
                                gutterBottom
                                style={{ textAlign: "left" }}
                              >
                                Ans. {quations?.correctAns}
                              </Typography>
                              <Typography
                                variant="body2"
                                gutterBottom
                                style={{
                                  textAlign: "left",
                                  fontWeight: "bold",
                                }}
                              >
                                You selected Ans. {quations?.selectedOption}{" "}
                                {quations?.correctAns ===
                                quations?.selectedOption
                                  ? "✅"
                                  : "❌"}
                              </Typography>
                            </div>
                          </>
                        );
                      }
                    )}
                    <Typography
                      variant="button"
                      display="block"
                      gutterBottom
                      style={{
                        fontWeight: "bold",
                        marginTop: 25,
                        textTransform: "none",
                      }}
                    >
                      You get {correctQuestions} mark out of {totalQuestions?totalQuestions:20}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -1 }}>
                    <Button onClick={handleSubmitQuizResult}>Submit</Button>
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
export default ShowMarks;
