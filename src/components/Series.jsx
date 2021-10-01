import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { StyledContent, StyledImg } from '../styles/home';
import { connect } from 'react-redux';
import { Card } from 'antd';

const { Meta } = Card;

export function Series({ info }) {

    let randomKey = 0;

    useEffect(() => {
        console.log(info.series);
    }, []);

    return (<div>
        <Header />
        <StyledContent>
            <Link to='/'>Volver</Link>
            <h1>Popular Series</h1>
            {info.series.slice(0, 20).map(serie => {

                return (

                    <Card
                        key={randomKey++}
                        hoverable
                        style={{ width: 240, }}
                        cover={<StyledImg alt="example" src="https://yosoy.red/wp-content/uploads/2021/05/cine.jpg" />}
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

export default connect(mapStateToProps)(Series);