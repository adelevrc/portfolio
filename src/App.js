import React from 'react'; 
import Nav from './components/Nav'; 
import AboutUs from './pages/AboutUs'; 
import GlobalStyle from './components/GlobalStyle'; 

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
