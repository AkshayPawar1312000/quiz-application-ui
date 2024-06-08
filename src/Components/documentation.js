import React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const document = [
  {
    title: "1. Registration",
    subTitle: "",
  },
];

// Documentation component displays relevant documentation or instructions to the user.

function Documentation() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/selectQuiz");
  };
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
                    <Typography variant="h5" gutterBottom>
                      Quiz Project Documentation
                    </Typography>
                    <InputLabel
                      style={{
                        textAlign: "center",
                        marginBottom: 4,
                        color: "#808080",
                        fontWeight: 500,
                      }}
                    >
                      This documentation outlines the steps required to
                      implement a quiz application.
                    </InputLabel>
                    <InputLabel
                      style={{
                        textAlign: "center",
                        marginBottom: 4,
                        color: "#808080",
                        fontWeight: 500,
                      }}
                    >
                      The application will follow a defined workflow to guide
                      users through registration, quiz selection,
                    </InputLabel>
                    <InputLabel
                      style={{
                        textAlign: "center",
                        marginBottom: 4,
                        color: "#808080",
                        fontWeight: 500,
                      }}
                    >
                      quiz submission, and result viewing.
                    </InputLabel>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -1 }} textAlign={"left"}>
                    <Typography variant="h6">
                      Step-by-Step Implementation
                    </Typography>
                    <Typography variant="h6">1. Registration</Typography>
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Objective: Allow new users to create an account.
                    </Typography>
                    <br />
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Steps:
                    </Typography>
                    <ol style={{ marginTop: -1 }}>
                      <li>Display a registration form to the user.</li>
                      <li>
                        Collect user details (e.g., first name,last name, email,
                        password)
                      </li>
                      <li>
                        Click the Submit. And save the user information to the
                        database.
                      </li>
                    </ol>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -3 }} textAlign={"left"}>
                    <Typography variant="h6">2. User Login</Typography>
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Objective: Authenticate existing users.
                    </Typography>
                    <br />
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Steps:
                    </Typography>
                    <ol style={{ marginTop: -1 }}>
                      <li>Display a login form to the user.</li>
                      <li>
                        Enter a login credentials (e.g., email, password).
                      </li>
                      <li>If invalid, display an error message.</li>
                      <li>
                        If valid, user then page automatically navigate the quiz
                        page.
                      </li>
                    </ol>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -3 }} textAlign={"left"}>
                    <Typography variant="h6">
                      3. Navigate to Select Quiz Page
                    </Typography>
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Objective: Present the user with available quizzes to
                      choose from.
                    </Typography>
                    <br />
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Steps:
                    </Typography>
                    <ol style={{ marginTop: -1 }}>
                      <li>Display a list of available quizzes.</li>
                      <li>Allow the user to select a quiz.</li>
                      <li>Provide a button to submit the selected quiz.</li>
                    </ol>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -3 }} textAlign={"left"}>
                    <Typography variant="h6">
                      4. Display Quiz Questions
                    </Typography>
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Objective: Show the questions for the selected quiz.
                    </Typography>
                    <br />
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Steps:
                    </Typography>
                    <ol style={{ marginTop: -1 }}>
                      <li>Show you selected Quiz</li>
                      <li>Select the one option. at one quation</li>
                      <li>Include a submit button to submit the answers.</li>
                    </ol>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -3 }} textAlign={"left"}>
                    <Typography variant="h6">5. Submit Quiz Answers</Typography>
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Objective: Process and evaluate the submitted answers.
                    </Typography>
                    <br />
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Steps:
                    </Typography>
                    <ol style={{ marginTop: -1 }}>
                      <li>Capture user responses to the quiz questions.</li>
                      <li>Validate and score the responses.</li>
                      <li>
                        Calculate the total score and the number of correct
                        answers.
                      </li>
                      <li>Next save the results .</li>
                      <li>Automatically navigate to the leaderboard page.</li>
                    </ol>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -3 }} textAlign={"left"}>
                    <Typography variant="h6">5. Submit Quiz Answers</Typography>
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Allow users to view their quiz results and compare with
                      others.
                    </Typography>
                    <br />
                    <Typography variant="" style={{ marginLeft: 20 }}>
                      Steps:
                    </Typography>
                    <ol style={{ marginTop: -1 }}>
                      <li>Fetch the user's quiz results</li>
                      <li>
                        Fetch the leaderboard information (e.g., top scores,
                        recent scores).
                      </li>
                      <li>
                        Display the user's results alongside the leaderboard.
                      </li>
                      <li>
                        Allow the user to navigate back to the quiz selection
                        page.
                      </li>
                    </ol>
                  </Grid>
                  <Grid item xs={12} sm={12} sx={{ mt: -1 }} textAlign={"left"}>
                    <Typography variant="h6">Conclusion</Typography>
                    <p>
                      By following these steps, the quiz application will
                      provide a seamless and user-friendly experience from
                      registration through to viewing quiz results. Each step is
                      designed to guide the user smoothly through the process
                      while ensuring data integrity and a consistent user
                      experience.
                    </p>
                  </Grid>

                  <Grid item xs={12} sm={12} sx={{ mt: -1 }}>
                    <Button
                      style={{ textTransform: "none" }}
                      onClick={handleBackButton}
                    >
                      Go Back
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

export default Documentation;
