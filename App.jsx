import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Card from './components/Card';

const lightTheme = {
  cardBackground: '#fff',
  text: '#333',
  buttonBackground: '#ffcca6',
  buttonText: '#000000',
  buttonHoverBackground: '#e86f15',
  background: '#f8f9fa'
};

const darkTheme = {
  cardBackground: '#333',
  text: '#fff',
  buttonBackground: '#ffcca6',
  buttonText: '#000000',
  buttonHoverBackground: '#e86f15',
  background: '#121212'
};

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
  }
`;

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContainer>
        <ToggleButton onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </ToggleButton>
        <Card />
      </AppContainer>
    </ThemeProvider>
  );
}
