import React from 'react'
import styled from 'styled-components'


export default function Main(){
    return(
        <MainWrapper>
            <div className="main">
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="main"> 
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    margin-right:15%;
    margin-left:15%;
    line-height: 30px;
    max-width:868px;
`
