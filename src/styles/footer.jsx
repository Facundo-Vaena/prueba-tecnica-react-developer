import styled from "styled-components";

export const StyledContainer = styled.div`
background-color:#332f2f;
padding-bottom: 2%;
`;

export const StyledP = styled.p`
color:rgb(255 255 255 / 60%);
`;

export const StyledIconContainer = styled.div`

@media (max-width: 500px) {
    display:flex;
    margin: 3%;
}
`;

export const FooterItemsDiv = styled.div`
    display:flex;
    gap:1%;
    margin-left: 8%;
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

