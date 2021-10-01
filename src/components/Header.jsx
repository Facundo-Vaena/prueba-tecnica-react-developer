import React from 'react'
import { HeaderContainer,StyledHeader1, StyledHeader2, StreamingDiv, ButtonsContainer } from '../styles/header'
import { Button } from 'antd'

export default function Header() {
    return (<HeaderContainer>
        <StyledHeader1>
            <StreamingDiv>
           <h1 style={{color:'white'}}>DEMO Streaming</h1>
           <ButtonsContainer>
           <Button type='text' style={{color:'white'}}>Log in</Button>
           <Button type='primary' style={{backgroundColor:'black', color:'white'}}>Start your free trail</Button>
            </ButtonsContainer>
            </StreamingDiv>
        </StyledHeader1>
        <StyledHeader2>
            <h1 style={{color:'white'}}>Popular Titles</h1>
        </StyledHeader2>
        </HeaderContainer>
    )
}
