import './App.css';
import './styles.js';
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import ProductsList from "./components/ProductList";

import {ThemeProvider} from "styled-components";

const theme = {
  mainColor:"black",
  backgroundColor: "lightyellow",
  color:"red",
};


function App() {
  
return (
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Home/>
      <ProductsList/>
      </ThemeProvider>
);
}
export default App;