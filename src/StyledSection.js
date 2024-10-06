import Styled from 'styled-components';


const StyledAsideRight = Styled.section`
    /* grid element settings */
    /* start row / start column / end row / end column */
    grid-area: 1 / 3 / 1 / 4;
    padding-left: 1rem;
    padding-right: 1rem;
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