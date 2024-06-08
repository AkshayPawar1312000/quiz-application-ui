import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserResultData } from "../store/action/userAction";

// LeaderBoard component displays a list of  users or scores.
// It fetches and renders the leaderboard data from a given source.

function LeaderBoard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userResult = useSelector((state) => state?.user?.userResult);
  const handleGoBack = () => {
    navigate("/selectQuiz");
  };

  useEffect(() => {
    dispatch(getAllUserResultData());
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
          <Grid item xs={9} sx={{ mb: -37.5 }}>
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
                      Quiz Leaderboard
                    </InputLabel>
                  </Grid>
                  {userResult?.map((user, index) => (
                    <div key={index} style={{marginTop:15}}>
                      <Typography variant="button" display="block" gutterBottom textAlign={"left"}>
                        {user.firstName} {user.lastName}
                      </Typography>
                      {user.quizResult.length > 0 ? (
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 840 }}
                            size="small"
                            aria-label="a dense table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Quiz Subject</TableCell>
                                <TableCell align="right">Your Mark</TableCell>
                                <TableCell align="right">Total Mark</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {user.quizResult.map((quiz) => (
                                <TableRow
                                  key={quiz._id}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {quiz.quizName}
                                  </TableCell>
                                  <TableCell align="right">
                                    {quiz.yourMark}
                                  </TableCell>
                                  <TableCell align="right">
                                    {quiz.totalMark}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      ) : (
                        <Typography variant="body2" color="textSecondary">
                          No quiz results available.
                        </Typography>
                      )}
                       <Divider />
                    </div>
                  ))}
                  <Grid item xs={12} sm={12} sx={{ mt: -1 }}>
                    <Button
                      style={{ textTransform: "none" }}
                      onClick={handleGoBack}
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
export default LeaderBoard;
