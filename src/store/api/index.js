// API component manages communication with external APIs, handling requests and responses to the server
import axios from 'axios'

// const API = axios.create({ baseURL: 'http://localhost:5000'})
const API = axios.create({ baseURL: process.env.REACT_APP_API})


API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})


//Quiz API's
export const getQuiz = (id) => API.get(`/quiz/${id}`);
export const submitQuizResult = (id,quizResult)=>API.post(`/quizResult/${id}`,quizResult)

// User API's
export const postUserData = (userInfo)=>API.post(`/userRegistration`,userInfo)
export const userSingin = (userInfo)=>API.post(`/login`,userInfo)
export const getAllUserResultData = ()=>API.get(`/allUsersResult`)




