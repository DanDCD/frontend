import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../StyledSection';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../index.css";

const StyledHi = styled.h1`
    color: #80ed99;
    margin: 0;
    whitespace: nowrap;
    font-size: calc(1vw + 5rem);
`;

const StyledTagline = styled.h2`
    color: #80ed99;
    margin: 0;
    whitespace: nowrap;
    font-size: calc(1vw + 2rem);
`;

const StyledWelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap; /* This will allow items to wrap to the next line if necessary */
    @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically on small screens */
        text-align: center; /* Center-align text */
    }
`;

const StyledWelcomeTextContainer = styled.div`
    flex: 1;
    padding: 10px; /* Add padding for spacing */
`;

const StyledProfileImage = styled.img`
    width: 200px;
    border-radius: 50%;
    margin-left: 20px;
    @media (max-width: 768px) {
        margin: 20px 0 0 0; /* Remove left margin and add top margin for spacing */
        width: 170px; /* Optionally reduce size on smaller screens */
    }
`;

const StyledExperiencePreview = styled.section`
    margin-top: 5vh;

    display: flex;
    /* align top of images */
    align-items: flex-start;
    /* add small margin between images */
    gap: 10%;
    /* center container horizontally */
    justify-content: center;
`




const Home = () => {
    return (
        <StyledSection style={{ marginTop: '3vh' }}>
            <StyledWelcomeContainer>
                <StyledWelcomeTextContainer>
                    <StyledHi>Hello!</StyledHi>
                    <StyledTagline>I develop Software</StyledTagline>
                    <p style={{ marginTop: '5vh' }}><strong>I'm Daniel</strong>, a Computer Science graduate from the University of Southampton, about to return as a Software Engineer at Bloomberg!</p>
                </StyledWelcomeTextContainer>
                <StyledProfileImage src={`${process.env.PUBLIC_URL}/image.jpg`} alt="Daniel's profile" />
            </StyledWelcomeContainer>
            <StyledExperiencePreview>
                <img src={`${process.env.PUBLIC_URL}/southampton-modified.png`} alt="University of Southampton" style={{ width: '150px', height: 'auto' }} />
                <img src={`${process.env.PUBLIC_URL}/bloomberg-modified.png`} alt="Bloomberg Engineering" style={{ width: '150px', height: 'auto' }} />
            </StyledExperiencePreview>
        </StyledSection>
    );
}

export default Home;