import styled from 'styled-components';
export const StyledImg = styled.img`
height:150px;
`;


export const StyledContent = styled.div`
    display: flex;
    justify-content: flex-start;
    gap:3%;
    padding: 7.5% 0 7.5% 0;
    margin-left: 10%;
    margin-bottom: 1%;

@media (max-width: 500px){

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-right:6%;
    gap: 20px;
}
`;

export const StyledContent2 = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width:1310px;
    gap:3%;
    padding: 7.5% 0 7.5% 0;
    margin-left: 15%;
    margin-bottom: 1%;

@media (max-width: 500px){

    display: flex;
    flex-direction: column;
    align-items: center;
    width:345px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-right:6%;
    gap: 20px;
}
`;

export const ProgramsDiv = styled.div`
display: flex;
flex-wrap: wrap;
gap:3%;
margin-top: -6%;
margin-bottom: -8%;
@media (max-width:500px) {
    display: block;
}

`;


export const StyledImgProgram = styled.img`
height:300px;
`;

export const StyledMessage = styled.p`
display: flex;
justify-content: flex-start;
margin-left: 15%;
margin-top: auto.5%;
padding-bottom: 386px;
@media (max-width:500px) {
    margin-left:28%;
}
`;

//display:'flex', justifyContent:'flex-start', marginLeft:'15%', marginTop:'.5%', paddingBottom:'386px'}}>Oops, something went wrong...</p>
