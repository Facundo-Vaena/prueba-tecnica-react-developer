import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header'
import Footer from './Footer'
import { StyledContent, StyledImg } from '../styles/home'
import { Card } from 'antd';

const { Meta } = Card;

export function Movies({ info }) {

    let randomKey = 0;

    useEffect(() => {
        console.log(info.movies)
    }, [])


    return (<div>
        <Header />
        <StyledContent>
            <Link to='/'>Volver</Link>
            <h1>Popular Movies</h1>
            {
                info.movies.slice(0, 20).map(movie => {
                    return (
                        <Card
                            key={randomKey++}
                            hoverable
                            style={{ width: 240, }}
                            cover={<StyledImg alt="example" src="https://yosoy.red/wp-content/uploads/2021/05/cine.jpg" />}
                        >
                            <Meta title={movie.title} description="" />
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


export default connect(mapStateToProps)(Movies);



