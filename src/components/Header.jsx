import React from 'react'
import { HeaderContainer, StyledHeader1, StyledHeader2, StreamingDiv, ButtonsContainer, StyledTitle, StyledTitle2 } from '../styles/header'
import { Button } from 'antd'


export default function Header() {
    return (<HeaderContainer>
        <StyledHeader1>
            <StreamingDiv>
                <StyledTitle>DEMO Streaming</StyledTitle>
                <ButtonsContainer>
                    <Button type='text' style={{ color: 'white' }}>Log in</Button>
                    <Button type='primary' style={{ backgroundColor: 'black', color: 'white' }}>Start your free trail</Button>
                </ButtonsContainer>
            </StreamingDiv>
        </StyledHeader1>
        <StyledHeader2>
            <StyledTitle2>Popular Titles</StyledTitle2>
        </StyledHeader2>
    </HeaderContainer>
    )
}
