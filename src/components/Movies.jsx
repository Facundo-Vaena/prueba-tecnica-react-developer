import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import Footer from './Footer'
import { StyledImgProgram, StyledContent2, ProgramsDiv } from '../styles/home'
import { StyledModalImg, StyledP2, StyledModal, } from '../styles/modal';
import { Card, Typography } from 'antd';
import { getInfo } from '../actions';

const { Meta } = Card;
const { Text } = Typography;

export function Movies({ info, getInfo }) {
    const [openModal, setOpenModal] = useState(false);
    const [modalInfo, setModalInfo] = useState(null);

    let randomKey = 0;


    const modalMethod = (info) => {
        setModalInfo(info);
        setOpenModal(true);
    }

    useEffect(() => {
        !info && getInfo();
        // eslint-disable-next-line
    }, [info])


    return (<div>
        <Header section='Movies' />

        <StyledContent2>

            <StyledModal
                title={modalInfo?.title}
                visible={openModal}
                onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
            >
                
                <div style={{ marginBottom: '2%', backgroundColor: '#80808091', borderRadius: '2%' }}>
                    <StyledModalImg src={modalInfo?.img} alt="" />
                </div>
                
                <StyledP2>{modalInfo?.description}</StyledP2>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Text>Release Year: {modalInfo?.releaseYear}</Text>
                </div>
            
            </StyledModal>
            
            <ProgramsDiv>
                {
                    info.movies?.slice(0, 20).map(movie => {
                        return (
                            <Card

                                onClick={() => modalMethod({
                                    title: movie.title, description: movie.description,
                                    releaseYear: movie.releaseYear, img: movie.images["Poster Art"].url
                                })}
                                key={randomKey++}
                                hoverable
                                style={{ width: 240, }}
                                cover={<StyledImgProgram alt="example" src={movie.images["Poster Art"].url} />}
                            >
                                <Meta title={movie.title} description="" />
                            </Card>
                        )
                    })
                }
            </ProgramsDiv>


        </StyledContent2>

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
        getInfo: () => dispatch(getInfo()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movies);



