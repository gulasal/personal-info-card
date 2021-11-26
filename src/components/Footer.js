import React from "react";
import {FaTwitterSquare} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import styled from "styled-components"


export default function Footer(){
    return(
        <FooterWrapper className="footer">
            <div><a href="https://twitter.com/reactjs?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitterSquare style={{fontSize: "40px", color: "snow"}} class="icon"/></a></div>
            <div><a href="https://www.facebook.com/react/"><FaFacebookSquare style={{fontSize: "40px", color: "snow"}} class="icon"/></a></div>
            <div><a href="https://www.instagram.com/reactjsofficial/?hl=en"><FaInstagramSquare style={{fontSize: "40px", color: "snow"}} class="icon"/></a></div>
            <div><a href="https://github.com/gulasal"><FaGithubSquare style={{fontSize: "40px", color: "snow"}} class="icon"/></a></div>
        </FooterWrapper>
    )
}
const FooterWrapper = styled.div`
   display: flex;
   text-decoration: none;
   justify-content: center;
   align-items: center;
   color: white;
   width: 100%;
   height: 10rem;
   background: black;

    div{
        padding: 1rem;
    }

   div > a > .icon{
    transition: 0.6s;
   }

   div > a > .icon:hover{
    transform: scale(1.2);
    transition: 0.6s;
   }
`