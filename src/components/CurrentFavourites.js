import React from 'react';
import styled from 'styled-components';

const CurrentProjectsStyled = styled.section`
/* top bottom right left */
  padding: 1vh 1vh 1vw 1vh;
  border: dashed;
  border-radius: 25px;
  color: #07beb8;
  opacity: 0.5;
  transition: opacity 0.5s ease-in-out, font-weight 0.5s ease-in-out;
  &:hover {
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
  height: 20vh;
`;

const EmojiLinkStyled = styled.a`
  position: relative;
  font-size: ${({ isHovered }) => (isHovered ? '10vh' : '5vh')};
  transition: font-size 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

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
  min-height: 6vh;
  fontSize: 2vh;
  text-align: center;
`;

const CurrentFavourites = () => {
  const projects = {
    koala: {
      text: 'Wombat Engine: A 3D renderer made with C++ and OpenGL',
      link: 'https://github.com/DanDCD/WombatEngine',
    },
    book: {
      text: 'A Jupyter Notebook exploring Linear Algebra with Python',
      link: 'https://github.com/DanDCD/linear_algebra',
    },
    web: {
      text: 'Self-Hosting this Website using Cloudflare, React, and Docker',
      link: 'https://github.com/DanDCD/frontend',
    },
  };

  const [hoveredProject, setHoveredProject] = React.useState('koala');
  const [touchSupported, setTouchSupported] = React.useState(false);
  const [tappedProject, setTappedProject] = React.useState(null);

  React.useEffect(() => {
    setTouchSupported('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseEnter = (projectKey) => {
    if (!touchSupported) {
      setHoveredProject(projectKey);
    }
  };

  const handleTouch = (projectKey, link) => {
    if (touchSupported) {
      if (tappedProject === projectKey) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        setTappedProject(projectKey);
        setHoveredProject(projectKey);
      }
    }
  };

  return (
    <CurrentProjectsStyled>
      <h2 style={{ fontSize: '3vh', textAlign: 'center' }}>Current Side-Projects</h2>
      <ProjectsContainerStyled>
        {Object.keys(projects).map((key) => (
          <EmojiLinkStyled
            key={key}
            href={touchSupported ? '#' : projects[key].link}
            target={touchSupported ? '' : '_blank'}
            rel="noopener noreferrer"
            isHovered={hoveredProject === key}
            onMouseEnter={() => handleMouseEnter(key)}
            onClick={() => touchSupported && handleTouch(key, projects[key].link)}
          >
            {key === 'koala' && '🐨'}
            {key === 'book' && '📖'}
            {key === 'web' && '🌐'}
            <Tooltip className="Tooltip">Click to {touchSupported ? 'select' : 'open repo'}!</Tooltip>
          </EmojiLinkStyled>
        ))}
      </ProjectsContainerStyled>
      <PreviewText style={{}}>{projects[hoveredProject].text}</PreviewText>
    </CurrentProjectsStyled>
  );
};

export default CurrentFavourites;
