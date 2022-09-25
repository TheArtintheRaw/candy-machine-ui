import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#000000',
            main: '#f7f7f7',
            dark: '#000000',
            contrastText: '#ff0022',  
        },

    },
});




ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
   <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
