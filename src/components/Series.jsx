import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { StyledContent, StyledImgProgram } from '../styles/home';
import { connect, } from 'react-redux';
import { Card } from 'antd';
import { setDetail } from '../actions';

const { Meta } = Card;

export function Series({ info, setDetail }) {

    let randomKey = 0;
    const history = useHistory();
    const goDetail = (arg) => {
        console.log(arg);
        setDetail(arg)
        history.push('/detail');
    }

    // useEffect(() => {
    //     console.log(info.series);
    // }, []);

    return (<div>
        <Header />
        <StyledContent>
            <Link to='/'>Volver</Link>
            <h1>Popular Series</h1>
            {info.series?.slice(0, 20).map(serie => {

                return (

                    <Card
                        onClick={() => goDetail(serie.images["Poster Art"].url)}
                        key={randomKey++}
                        hoverable
                        style={{ width: 240 }}
                        cover={<StyledImgProgram alt="example" src={serie.images["Poster Art"].url} />}
                    >
                        <Meta title={serie.title} description="" />
                    </Card>
                )
            })
            }
        </StyledContent>
        <Footer />

    </div>)
}

function mapStateToProps(state) {
    return {
        info: state.info,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setDetail: (arg) => dispatch(setDetail(arg)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Series);