import React, { useState } from 'react';
import styled from '@emotion/styled';
import Switch from 'react-toggle-switch';
import 'react-toggle-switch/dist/css/switch.min.css';
import GitHubIconSVG from './github-mark.svg';
import poemsData from './poems.json';
import ReactHtmlParser from 'react-html-parser'; // Import the library


const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${props => (props.darkMode ? '#555' : '#f2f2f2')}; /* White (#f2f2f2) for the default mode */
  color: ${props => (props.darkMode ? '#fff' : '#333')};
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  flex-grow: 1;
`;

const DarkModeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const DarkModeText = styled.span`
  margin-right: 8px;
`;

const Body = styled.div`
background-color: ${props => (props.darkMode ? '#333' : '#fff')}; /* White (#fff) for the default mode */
  color: ${props => (props.darkMode ? '#fff' : '#333')};
transition: background-color 0.3s, color 0.3s;
min-height: 100vh;
padding: 20px;
`;
const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => (props.darkMode ? '#fff' : '#333')};
  transition: color 0.3s;
  margin-left: 2px;
`;

const GitHubIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
const PoemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px; /* Add padding here to match the Latin text section */
`;

const PoemColumn = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
`;

const PoemTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`;

const PoemText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const LatinDescription = styled.p`
  font-size: 18px;
  font-weight: normal;
  padding: 10px;
  line-height: 1.8
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const poems = [
    {
      title: 'Had Death Not Had Me In Tears (Snippet) - Kofi Awonoor',
      text: 'This is the text of poem 1.',
    },
    {
      title: 'Poem 2',
      text: 'This is the text of poem 2.',
    },
    {
      title: 'Poem 3',
      text: 'This is the text of poem 3.',
    },
    // Add more poems as needed
  ];

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Body darkMode={darkMode}>
      <NavigationBar darkMode={darkMode}>
        <Title>Nights in Pinheiros</Title>
        <DarkModeToggleWrapper>
          <DarkModeText>Dark Mode</DarkModeText>
          <Switch onClick={handleDarkModeToggle} on={darkMode} />
        </DarkModeToggleWrapper>
        <GitHubLink
          darkMode={darkMode}
          href="https://github.com/ziaali455"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon src= {GitHubIconSVG}
            viewBox="0 0 24 24"
            fill={darkMode ? '#fff' : '#333'}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Add your GitHub logo SVG code here */}
          </GitHubIcon>
          GitHub
        </GitHubLink>
      </NavigationBar>
      <LatinDescription>
      This is a collection of poems, both by me and some of my favorite poets, that I read and wrote during my time in Pinheiros, São Paulo. As far as the original poems, these are the first I have ever written, and most are quite rough, but they are genuine. Some are written in Portuguese, others in English. This website is more for my own book-keeping, but I figured it would be good to share the work of some amazing literary figures. Inspiration was drawn from the incredible work of Ahmad Faraz (translated from Urdu), Rumi (translated from Farsi), Kofi Awoonor (translated from Ewe), Mahmoud Darwish (translated from Arabic), and Maya Angelou.
      </LatinDescription>
      <PoemsGrid>
        {poemsData.map(poem => (
          <div key={poem.title}>
            <PoemTitle>{poem.title}</PoemTitle>
            <PoemContent>{processPoemContent(poem.content)}</PoemContent>
          </div>
        ))}
      </PoemsGrid>
    </Body>
  );
};

const PoemCard = styled.div`
  flex: 0 0 45%; /* Adjust the size of the poem card */
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;
// Function to replace \n with React line breaks (<br />)
const processPoemContent = content => {
  return content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const PoemContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;
const PoemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px; /* Adjust the spacing between poems */
  padding: 20px; /* Add some padding to the grid container */
`;

export default App;
