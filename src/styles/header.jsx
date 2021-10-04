import styled from 'styled-components';

export const HeaderContainer = styled.div`

display:flex;
flex-direction:column;
`;

export const StyledTitle = styled.h1`
color: white;
margin-left: 15%;
margin-top:1%;
@media (max-width:500px) {
margin-left: 0;
margin-top: 0;
};
`;

export const StyledTitle2 = styled.h1`
color: white;
display: flex;
justify-content: flex-start;
margin-left: 15%;
margin-top:1%;
@media (max-width:500px) {
display: flex;
justify-content: center;
margin-left: 0;
margin-top: 0;
};
`;
export const StyledHeader1 = styled.div`
background-color:#0845a7;
-webkit-box-shadow: inset 110px 117px 149px 7px rgba(255,255,255,0.24);
-moz-box-shadow: inset 110px 117px 149px 7px rgba(255,255,255,0.24);
box-shadow: inset 110px 117px 149px 7px rgba(255,255,255,0.24);

@media (max-width:500px) {

}
`;
export const StyledHeader2 = styled.div`
background-color: #332f2f;

`

export const StreamingDiv = styled.div`
display:flex;
justify-content: space-between;
@media (max-width:500px) {
    display:flex;
    justify-content:space-evenly;
}
`;

export const ButtonsContainer = styled.div`

margin-top: 1.5%;
margin-right:3%;

@media (max-width:500px) {
    margin-top:2%;
}
`;

