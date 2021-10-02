import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInfo } from '../actions';
import Header from './Header';
import Footer from './Footer';
import { Card } from 'antd';
import { StyledImg, StyledContent } from '../styles/home';

const { Meta } = Card;

export function Home({ info, getInfo }) {

    const history = useHistory();
    const goMovies = () => history.push('/movies');
    const goSeries = () => history.push('/series');

    useEffect(() => {
        !info && getInfo();
    }, []);

    return (
        <div>
            <Header />
            <StyledContent>
                <Card
                    onClick={goSeries}
                    hoverable
                    style={{ width: 240, }}
                    cover={<StyledImg alt="example" src="https://st2.depositphotos.com/1037987/10994/i/600/depositphotos_109944104-stock-photo-family-watching-tv-at-home.jpg" />}
                >
                    <Meta title="Popular Series" description="" />
                </Card>
                <Card
                    onClick={goMovies}
                    hoverable
                    style={{ width: 240, }}
                    cover={<StyledImg alt="example" src="https://yosoy.red/wp-content/uploads/2021/05/cine.jpg" />}
                >
                    <Meta title="Popular Movies" description="" />
                </Card>,
            </StyledContent>
            <Footer />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        info: state.info,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getInfo: () => dispatch(getInfo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);