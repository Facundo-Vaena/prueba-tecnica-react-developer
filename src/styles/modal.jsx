import styled from 'styled-components';
import { Modal } from 'antd';

export const StyledP2 = styled.p`
    text-align:center;
`;

export const StyledModal = styled(Modal)`
    height:24%;
    margin-top: -6.8%;
`;

export const StyledModalImg = styled.img`
height:460px;
margin-left: 16%;


@media (max-width:500px){
    height:200px;
    margin-left:34%;
    /* margin-bottom:1%; */
    /* margin-top:1%; */
}
`;

export const ModalDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;

