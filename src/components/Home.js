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


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Home = () => {
    return (
        <StyledSection style={{ marginTop: '3vh' }}>
            <StyledWelcomeContainer>
                <StyledWelcomeTextContainer>
                    <StyledHi>Hello!</StyledHi>
                    <StyledTagline>I develop Software</StyledTagline>
                    <p style={{ marginTop: '5vh' }}>I'm Daniel, a Computer Science graduate from the University of Southampton, about to return as a Software Engineer at Bloomberg!</p>
                </StyledWelcomeTextContainer>
                <StyledProfileImage src={`${process.env.PUBLIC_URL}/image.jpg`} alt="Daniel's profile" />
            </StyledWelcomeContainer>
            <Carousel responsive={responsive} infinite>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
        </StyledSection>

    );
}

export default Home;