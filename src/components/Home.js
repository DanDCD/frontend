import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledSection, StyledAsideRight } from '../StyledSection';
import Carousel from './Carousel';
import CurrentFavourites from './CurrentFavourites';
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

const StyledTaglineSmall = styled.h2`
    padding-top: 5vh;
    color:  #07beb8;
    margin: 0;
    whitespace: nowrap;
    font-size: calc(1vw + 1rem);
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




const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // handle window resize event for tracking isMobile state
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const experience_preview_images = [`${process.env.PUBLIC_URL}/bloomberg.jpg`, `${process.env.PUBLIC_URL}/southampton.png`, `${process.env.PUBLIC_URL}/bloomberg2.jpg`];
    const captions = ["SWE Internship at Bloomberg (2023)", "University of Southampton (2021-2024)", "SWE at Bloomberg (2024-)"];
    return (
        <React.Fragment>
            <StyledSection style={{ marginTop: '3vh' }}>
                <StyledWelcomeContainer>
                    <StyledWelcomeTextContainer>
                        <StyledHi>Hello!</StyledHi>
                        <StyledTagline>I develop Software</StyledTagline>
                        <p style={{ marginTop: '5vh' }}><strong>I'm Daniel</strong>, a Computer Science graduate from the University of Southampton, about to return as a Software Engineer at Bloomberg!</p>
                    </StyledWelcomeTextContainer>
                    <StyledProfileImage src={`${process.env.PUBLIC_URL}/image.jpg`} alt="Daniel's profile" />
                </StyledWelcomeContainer>

                <StyledTaglineSmall>
                    check out my highlights
                    <p style={{ display: 'inline', fontSize: 'calc(1vw + 1.5rem)', position: 'relative', top: '0.2em' }}>↴</p>
                </StyledTaglineSmall>
                <Carousel images={experience_preview_images} captions={captions} />
                {isMobile && (<CurrentFavourites />)}
            </StyledSection>
            {!isMobile && (
                <StyledAsideRight style={{ marginTop: '60vh', marginLeft: '10%', marginRight: '10%', marginBottom: '10%'}}>
                    <CurrentFavourites />
                </StyledAsideRight>
            )}
        </React.Fragment>
    );
}

export default Home;