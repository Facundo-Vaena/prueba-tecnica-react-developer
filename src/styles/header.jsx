import styled from 'styled-components';

export const HeaderContainer = styled.div`
display:flex;
flex-direction:column;
`;

export const StyledHeader1 = styled.div`
background-color: blue;
`;
export const StyledHeader2 = styled.div`
background-color: black;
`

export const StreamingDiv = styled.div`
@media (max-width:500px) {
    display:flex;
    justify-content:space-evenly;
}
`;

export const ButtonsContainer = styled.div`
@media (max-width:500px) {
    margin-top:2%;
}
`;

