import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {

    params: {
        maxResults: 50,
        part: 'snippet',
        videoId: 'M7FIvfx5J10'
    },
    headers: {
        // 'X-RapidAPI-Key': '7d91cba5d5mshd786f047050450ep1e4f62jsn578027b3891c',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}

// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// export const fetchFromApi = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/captions',
//   params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// export const fetchFromApi = async () =>{
//   const { datas } = await axios.request(options).then(function (datas) {
//     console.log(datas.data);
//   }).catch(function (error) {
//     console.error(error);
//   });

//   return datas
// }