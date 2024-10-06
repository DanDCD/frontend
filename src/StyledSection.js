import Styled from 'styled-components';


const StyledAsideRight = Styled.section`
    /* grid element settings */
    /* start row / start column / end row / end column */
    grid-area: 1 / 3 / 1 / 4;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (max-width: 768px) {
        /* dont display on small screens */
        display: none;
    }
    /* lower opacity and make less prominent */
    opacity: 0.5;
    /* increase opacity on hover */
    &:hover {
        /* transition effect */
        opacity: 1;
        font-weight: bold;
        transition: opacity 0.5s, font-weight 0.5s;
    }
   
`;


const StyledSection = Styled.section`
    /* grid element settings */
    /* start row / start column / end row / end column */
    grid-area: 1 / 2 / 1 / 3;
    padding: 1rem;
`;

const StyledSectionFull = Styled.section`
    /* grid element settings */
    /* start row / start column / end row / end column */
    grid-area: 1 / 1 / 1 / 4;
    padding: 1rem;
`;

export { StyledAsideRight, StyledSection, StyledSectionFull };