import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { StyledContent, StyledImgProgram, StyledImg, StyledContent2, ProgramsDiv } from '../styles/home';
import { StyledP2, ModalDiv, StyledModalImg } from '../styles/modal';
import { connect, } from 'react-redux';
import { Card, Modal, Typography } from 'antd';
import { getInfo } from '../actions';

const { Meta } = Card;
const { Text } = Typography;

export function Series({ info, getInfo }) {

    const [openModal, setOpenModal] = useState(false);
    const [modalInfo, setModalInfo] = useState(null);

    let randomKey = 0;
    const history = useHistory();
    // const goDetail = (arg) => {
    //     console.log(arg);
    //     setDetail(arg)
    //     history.push('/detail');
    // }

    const modalMethod = (info) => {
        setModalInfo(info);
        setOpenModal(true);
    }

    useEffect(() => {
        !info && getInfo();
    }, []);

    return (<div>
        <Header />
        <StyledContent2>
            <Link to='/'>Volver</Link>
            <h1>Popular Series</h1>
            <Modal
                title={modalInfo?.title}
                visible={openModal}
                onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
            >
                    <div style={{marginBottom:'2%', backgroundColor:'#80808091', borderRadius:'2%'}}>
                    <StyledModalImg src={modalInfo?.img} alt="" />
                    </div>
                    <StyledP2>{modalInfo?.description}</StyledP2>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                    <Text>Release Year: {modalInfo?.releaseYear}</Text>
                    </div>
            </Modal>
            <ProgramsDiv>
            {info.series?.slice(0, 20).map(serie => {

                return (

                    <Card
                        // onClick={() => goDetail(serie.images["Poster Art"].url)}
                        onClick={() => modalMethod({
                            title: serie.title, description: serie.description,
                            releaseYear: serie.releaseYear, img: serie.images["Poster Art"].url
                        }
                        )}
                        key={randomKey++}
                        hoverable
                        style={{ width: 240, marginBottom:'3%' }}
                        cover={<StyledImgProgram alt="example" src={serie.images["Poster Art"].url} />}
                    >
                        <Meta title={serie.title} description="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Series);