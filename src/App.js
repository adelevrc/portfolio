import React from 'react'; 
import {Switch, Route, useLocation} from 'react-router-dom'; 
import Nav from './components/Nav'; 
import AboutUs from './pages/AboutUs'; 
import GlobalStyle from './components/GlobalStyle'; 
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'; 
import MovieDetail from './pages/MovieDetail'; 
import {AnimatePresence} from 'framer-motion'; 
// import ScrollTop from './components/ScrollTop'; 


function App() {
  const location = useLocation(); 
  console.log(location);
  return (
    <div className="App">

      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>

        <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/work" exact>
          <OurWork />      
        </Route>

        <Route path="/work/:id">
          <MovieDetail />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>
        </Switch>


      </AnimatePresence>
    </div>
  );
}

export default App;
