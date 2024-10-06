import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

// Define the main container - this contains the CarouselSlide and the arrow buttons - it hides all overflowing slides, meaning only one slide is visible at a time
const CarouselContainer = styled.div`
    padding-top: 5%;
    width: 100%;
    max-width: 600px;
    overflow: hidden; /* Hide the overflow of the slides - this is what creates the carousel effect */
    position: relative;
    margin: auto;
`;

// Define the slide images container - this contains all the slides horizontally
const CarouselSlide = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: ${({ currentSlide }) => `translateX(-${100 * currentSlide}%)`}; 
    width: 100%;
`;

// Define individual slide container
const Slide = styled.div`
    position: relative;  /* This allows text to be positioned relative to the slide */
    min-width: 100%;
    height: 400px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`;

// Define text overlay on the image
const SlideText = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);  /* Semi-transparent background for better readability */
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5rem;
`;

// Define left and right arrow buttons
const ArrowButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    padding: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
    ${({ left }) => (left ? `left: 10px;` : `right: 10px;`)}
`;

// Define dot indicators
const Dots = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const Dot = styled.span`
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: ${({ isActive }) => (isActive ? '#80ed99' : '#bbb')};
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
`;

const Carousel = ({ images, captions, autoScrollInterval = 9000 }) => {
    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);
    const numSlides = images.length; // Number of slides

    // Function to go to the next slide
    const nextSlide = useCallback(() => {
        setCurrentSlide((currentSlide + 1) % numSlides);
    }, [currentSlide, numSlides]);

    // Function to go to the previous slide
    const previousSlide = () => {
        setCurrentSlide((currentSlide - 1 + numSlides) % numSlides);
    };

    // we use useEffect to set up the interval for auto-scrolling
    useEffect(() => { // set-up function for useEffect
        const intervalId = setInterval(nextSlide, autoScrollInterval); // set interval to call nextSlide every autoScrollInterval milliseconds

        return () => { // clean-up function for useEffect
            clearInterval(intervalId)
        }; 
    }, [nextSlide, autoScrollInterval]); // if these values change, the effect will re-run

    return (
        <div>
            <CarouselContainer>
                <ArrowButton left onClick={previousSlide}> 
                    &#8249; 
                </ArrowButton>
                <CarouselSlide currentSlide={currentSlide} numSlides={numSlides}>
                    {images.map((image, index) => (
                        <Slide key={index} image={image}>
                            <SlideText>{captions[index]}</SlideText> {/* Add text to each slide */}
                        </Slide>
                    ))}
                </CarouselSlide>
                <ArrowButton onClick={nextSlide}>
                    &#8250;
                </ArrowButton>
            </CarouselContainer>
            <Dots>
                {images.map((_, index) => (
                    <Dot key={index} isActive={index === currentSlide} onClick={() => setCurrentSlide(index)} />
                ))}
            </Dots>
        </div>
    );
};

export default Carousel;
