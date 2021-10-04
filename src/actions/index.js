import axios from 'axios';


export const GET_INFO = 'GET_INFO';


const baseURL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

export function getInfo() {
    return async function (dispatch) {

        try {

            
            const res = await axios(`${baseURL}`);
            
            let info = [...res.data['entries']];
            
            let movies = info.filter(element => {
                return element['programType'] === 'movie';
            })
            let series = info.filter(element => {
                return element['programType'] === 'series';
            })
            
            
            dispatch({ type: GET_INFO, payload: { movies: sortingProgram(movies), series: sortingProgram(series) } });
        
        } catch(err) {
            dispatch({type: GET_INFO, payload: 'Error'});
        }
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
