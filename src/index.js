import ReactDOM from "react-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import App from "./app/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <ToastContainer autoClose={false}/>
  </ThemeProvider>,
  rootElement
);
