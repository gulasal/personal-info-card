import React from "react"

import {MdEmail} from "react-icons/md"
import {FcGlobe as Globe} from "react-icons/fc"
import {SiTwitter} from "react-icons/si"
import styled from "styled-components"

export default function Header(){
    return(
        <HeaderWrapper className="header">
            <img src="https://videohive.img.customer.envatousercontent.com/files/fa3c2297-b272-4eb1-9b15-bcff146b5e4c/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=bce3af5dae18ba7fee3a1eed3cfcad89" width="75%" height="600px" alt="" style={{padding: "4rem 0 2rem 0"}}/>
            <h1>Gulasal Kuchkarova</h1>
            <h3>FrondEnd Developer</h3>
            <div className="webpage"> 
                <Globe/>
                <a href="https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A129">gulasalkuchkarova.website</a>
            </div>
            
            <ButtonWrapper className="button">
                <a href="asal.kuchkarova@gmail.com"><Button className="header-btn">
                    <SiTwitter style={{fontSize: "20px"}}/>
                    <span>Email</span>
                </Button></a>
                <a href="https://twitter.com/_reactdev"><Button className="header-btn">
                    <MdEmail style={{fontSize: "20px"}}/>
                    <span>Twitter</span>
                </Button></a>
            </ButtonWrapper>
        </HeaderWrapper>
    )
}
const ButtonWrapper = styled.div`
   display: flex;
   line-height: 1rem;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 8rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    transition: 0.6s;
`