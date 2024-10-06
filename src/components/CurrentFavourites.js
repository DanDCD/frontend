import React from 'react';
import styled from 'styled-components';


const CurrentProjectsStyled = styled.section`
  font-size: calc(1vw + 0.5rem);
  border: dashed;
  border-radius: 25px;
  color: #07beb8;
  /* lower opacity and make less prominent */
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out, font-weight 0.5s ease-in-out;
    /* increase opacity on hover */
    &:hover {
        /* transition effect */
        opacity: 1;
        font-weight: bold;
        transition: opacity 0.5s ease-in-out, font-weight 0.5s ease-in-out;
    }
  `;

const ProjectsContainerStyled = styled.aside`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2vw;
  height: 8vw; /* Set to a value larger than the biggest emoji size */
`;

const EmojiLinkStyled = styled.a`
  position: relative;
  font-size: ${({ isHovered }) => (isHovered ? '5vw' : '2vw')};
  transition: font-size 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none; /* Remove default link styling */
  color: inherit; /* Inherit color from parent to avoid blue link color */

  &:hover .Tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const PreviewText = styled.p`
  margin-top: 20px;
  font-size: 1.5rem;
`;

const CurrentFavourites = () => {
  const projects = {
    koala: {
      text: 'Wombat Engine: A 3D rendering engine made with C++ and OpenGL',
      link: 'https://github.com/DanDCD/WombatEngine',
    },
    book: {
      text: 'A Python Jupyter Notebook exploring Linear Algebra',
      link: 'https://github.com/DanDCD/linear_algebra',
    },
    web: {
      text: 'Self-Hosting this Website using Cloudflare, React, and Docker',
      link: 'https://github.com/DanDCD/frontend',
    },
  };

  const [hoveredProject, setHoveredProject] = React.useState('koala');

  const handleMouseEnter = (projectKey) => {
    setHoveredProject(projectKey);
  };

  return (
    <CurrentProjectsStyled>
      <h2 style={{ fontSize: '1vw' }}>Current Side-Projects:</h2>
      <ProjectsContainerStyled>
        <EmojiLinkStyled
          href={projects.koala.link}
          target="_blank"
          rel="noopener noreferrer"
          isHovered={hoveredProject === 'koala'}
          onMouseEnter={() => handleMouseEnter('koala')}
        >
          🐨
          <Tooltip className="Tooltip">Click to open repo!</Tooltip>
        </EmojiLinkStyled>
        <EmojiLinkStyled
          href={projects.book.link}
          target="_blank"
          rel="noopener noreferrer"
          isHovered={hoveredProject === 'book'}
          onMouseEnter={() => handleMouseEnter('book')}
        >
          📖
          <Tooltip className="Tooltip">Click to open repo!</Tooltip>
        </EmojiLinkStyled>
        <EmojiLinkStyled
          href={projects.web.link}
          target="_blank"
          rel="noopener noreferrer"
          isHovered={hoveredProject === 'web'}
          onMouseEnter={() => handleMouseEnter('web')}
        >
          🌐
          <Tooltip className="Tooltip">Click to learn more!</Tooltip>
        </EmojiLinkStyled>
      </ProjectsContainerStyled>
      <PreviewText>{projects[hoveredProject].text}</PreviewText>
    </CurrentProjectsStyled>
  );
};

export default CurrentFavourites;
