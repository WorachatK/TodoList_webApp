import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Todo from "./components/Todo";
import { GlobalStyles } from "./globalStyles";
import { lightTheme,darkTheme } from "./Themes";


function App() {
  const [theme,setTheme] = useState('light')
  const themeToggle = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Todo themeToggle={themeToggle} theme={theme}/>
    </ThemeProvider>
  );
}

export default App;
