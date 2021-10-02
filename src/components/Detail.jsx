import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { StyledContent } from '../styles/home';
import { Button } from 'antd';


export function Detail({info, selectedProgram}) {
    const [selected, setSelected] = useState(false);
    const [movieOrSerie, setMovieOrSerie] = useState(false);
    const history = useHistory();
    const comeBack = () => history.push(movieOrSerie);

    // useEffect(() => {
    //    selectedProgram ? console.log(selectedProgram): console.log('no hay nada', selectedProgram);
    //    info && console.log('hay info', info);
    // }, []);

    const selectedMethod = () => {
        let movieSelected = info.movies?.find(movie => movie.images["Poster Art"].url === selectedProgram);
        let serieSelected = info.series?.find(serie => serie.images["Poster Art"].url === selectedProgram);
        if(movieSelected || serieSelected) {
            movieSelected ? setSelected(movieSelected) : setSelected(serieSelected);

            movieSelected ? setMovieOrSerie('/movies') : setMovieOrSerie('/series');
        }
        // return movieSelected || serieSelected;
        return;
    }

    useEffect(() => {
        !selectedProgram && comeBack();
        selectedMethod();
    })

    return (
        <div>
            <Header />
            <StyledContent>
            <Button type='link' onClick={comeBack}>Volver</Button>
            <h1>{selected ? selected.title : null}</h1>
            </StyledContent>
            <Footer />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        info: state.info,
        selectedProgram: state.selectedProgram,
    }
}

export default connect(mapStateToProps)(Detail);
