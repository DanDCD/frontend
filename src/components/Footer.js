import React from 'react';
import Styled from 'styled-components';
import "../index.css";


const StyledFooter = Styled.footer`
    /* grid element settings */
    grid-area: footer;
    background-color: #022b3a;
    

    /* flex container settings */
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding-left: 10%;
    padding-right: 10%;
`;

const StyledP = Styled.p`
    /* flex item settings */
    flex-shrink: 1;
    font-size: calc(0.3vw + 0.4rem); /* Dynamically adjust font size based on viewport width */
    color: mintcream;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const StyledA = Styled.a`
    /* flex item settings */
    flex-shrink: 1;
    font-size: calc(0.3vw + 0.4rem); /* Dynamically adjust font size based on viewport width */
    color: mintcream;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 10px;
    `



const Footer = ({ section, setSection }) => {
    return (
        <StyledFooter>
            <StyledA href="mailto: daniel.drew2014@outlook.com" target="_blank">Email</StyledA>
            <StyledP>|</StyledP>
            <StyledA href="https://github.com/DanDCD" target="_blank" rel="noopener noreferrer">GitHub</StyledA>
            <StyledP>|</StyledP>
            <StyledA href="https://www.linkedin.com/in/daniel-drew-593220254/" target="_blank" rel="noopener noreferrer">LinkedIn</StyledA>
            <StyledP>|</StyledP>
            <StyledP>&copy; {new Date().getFullYear()} Daniel Drew. All Rights Reserved.</StyledP>
        </StyledFooter>
    );
}

export default Footer;