import styled from "styled-components";

export const StyledContainer = styled.div`
background-color:#332f2f;
padding-bottom: 2%;
`;

export const StyledP = styled.p`
color:rgb(255 255 255 / 60%);
`;

export const StyledIconContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left:3%;

@media (max-width: 500px) {
    display:flex;
    margin: 3%;
    margin-left:10%;
}
`;

export const FooterItemsDiv = styled.div`
    display:flex;
    gap:1%;
    margin-left: 8%;
    padding-top: 8px;
    @media (max-width:500px) {
        display: flex;
        flex-direction: column;
    }
`;

export const CopyrightDiv = styled.div`
display: flex;
margin-left: 8%;
@media (max-width:500px) {
    justify-content:center;
    margin-left:0;
}
`;

export const StyledStoreIcons = styled.div`
display: flex;
justify-content: flex-end;
margin-top:-2%;
margin-right:3%;
gap:3%;
@media (max-width:500px) {
margin-top:6%;
justify-content: center;
margin-left: 7%;
}
`;



