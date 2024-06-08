import React, { useEffect, useState } from "react";
// material-ui
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendQuizToResultPage } from "../store/action/quizAction.js";

// Quiz component presents a quiz questions to the user, handles user input and responses.

function Quize() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz.quiz);
  const [quizSub, setQuizSub] = useState("");
  const quationsArray = [];

  const handleCheckboxChange = (question, optionLabel, correctAns) => {
    const quationsObj = {
      question: question,
      selectedOption: optionLabel,
      correctAns: correctAns,
    };
    quationsArray.push(quationsObj);
  };

  const handleSubmitButton = () => {
    dispatch(sendQuizToResultPage(quationsArray, quiz?.quizSub, navigate));
  };
  useEffect(() => {
    if (quiz?.quizSub === 1) {
      setQuizSub("JavaScript");
    } else if (quiz?.quizSub === 2) {
      setQuizSub("React JS");
    } else if (quiz?.quizSub === 3) {
      setQuizSub("Node JS");
    }
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
                    <h3> {quizSub} Quation Quiz</h3>
                    {quiz?.quiz.map((question, index) => {
                      return (
                        <div key={index}>
                          <Typography
                            variant="body1"
                            gutterBottom
                            style={{
                              textAlign: "left",
                              marginBottom: 4,
                              color: "#808080",
                              fontWeight: 500,
                            }}
                          >
                            {index + 1}. {question.question}
                          </Typography>

                          <FormGroup style={{ marginBottom: 10 }}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="small"
                                  onChange={() =>
                                    handleCheckboxChange(
                                      question?.question,
                                      question?.option1,
                                      question?.correctAns
                                    )
                                  }
                                />
                              }
                              label={question?.option1}
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="small"
                                  onChange={() =>
                                    handleCheckboxChange(
                                      question?.question,
                                      question?.option2,
                                      question?.correctAns
                                    )
                                  }
                                />
                              }
                              label={question?.option2}
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="small"
                                  onChange={() =>
                                    handleCheckboxChange(
                                      question?.question,
                                      question?.option3,
                                      question?.correctAns
                                    )
                                  }
                                />
                              }
                              label={question?.option3}
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  size="small"
                                  onChange={() =>
                                    handleCheckboxChange(
                                      question?.question,
                                      question?.option4,
                                      question?.correctAns
                                    )
                                  }
                                />
                              }
                              label={question?.option4}
                            />
                          </FormGroup>
                        </div>
                      );
                    })}
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -1 }}>
                    <Button onClick={handleSubmitButton}>Submit</Button>
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
export default Quize;
