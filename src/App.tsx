// import { BrowserRouter as Router ,Routes, Route, } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Sobre } from './pages/Sobre';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Home />
      <Sobre />
    </div>
  );
}

export default App;
