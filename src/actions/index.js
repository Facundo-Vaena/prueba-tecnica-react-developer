import axios from 'axios';


export const GET_INFO = 'GET_INFO';
export const SET_DETAIL = 'SET_DETAIL';


const baseURL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

export function getInfo() {
    return async function (dispatch) {
        const res = await axios(baseURL);
        console.log('me ejecute');
        let info = [...res.data['entries']];

        let movies = info.filter(element => {
            return element['programType'] === 'movie';
        })
        let series = info.filter(element => {
            return element['programType'] === 'series';
        })

        dispatch({ type: GET_INFO, payload: { movies: sortingProgram(movies), series: sortingProgram(series) } });
    }
}


function sortingProgram(arr) {
    let newArray = arr.sort((a, b) => {
        if (a.title.toString()[0] > b.title.toString()[0]) return 1;
        else if (a.title.toString()[0] < b.title.toString()[0]) return -1;
        else return 0;
    })
    return newArray.filter(program => program.releaseYear >= 2010);
}

export function setDetail(arg) {
    return function (dispatch) {
        dispatch({ type: SET_DETAIL, payload: arg });
    }
}