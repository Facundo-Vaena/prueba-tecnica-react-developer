import React from 'react'
import { HeaderContainer, StyledHeader1, StyledHeader2, StreamingDiv, ButtonsContainer, StyledTitle, StyledTitle2 } from '../styles/header'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'


export default function Header({ section }) {
    return (<HeaderContainer>
        <StyledHeader1>
            <StreamingDiv>
                <StyledTitle>
                    <NavLink to='/' style={{color:'white'}}>
                        DEMO Streaming
                    </NavLink>
                </StyledTitle>
                <ButtonsContainer>
                    <Button type='text' style={{ color: 'white' }}>Log in</Button>
                    <Button type='primary' style={{ backgroundColor: 'black', color: 'white' }}>Start your free trail</Button>
                </ButtonsContainer>
            </StreamingDiv>
        </StyledHeader1>
        <StyledHeader2>
            <StyledTitle2 data-testid='abc'>Popular {section}</StyledTitle2>
        </StyledHeader2>
    </HeaderContainer>
    )
}
