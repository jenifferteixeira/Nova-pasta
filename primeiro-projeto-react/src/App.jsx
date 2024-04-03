import { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { NavBar } from './components/navbar';
import { Header } from './components/header';

import { Flex, Screen } from './style';
import { darkTheme, lightTheme } from './style/theme';
import { Stories } from './components/stories';

function App() {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme}/>

        <Flex gap="2px">
          <Header/>
          <Stories/>
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App
