import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import './../src/index.css';
import './App.css';
import Home from './components/04 home-page/homePage';
import Talent from './components/06 talent-page/talent-page';
import Esport from './components/05 esport-info-page/esport-info-text';
import Loading from './components/03 loader/loading';
import CaseOne from './components/07 projects-pages/01 case-one/case';
import CaseTwo from './components/07 projects-pages/02 case-two/case';
import CaseThree from './components/07 projects-pages/03 case-three/case';
import CaseFour from './components/07 projects-pages/04 case-four/case';
import CaseFive from './components/07 projects-pages/05 case-five/case';
import CaseSix from './components/07 projects-pages/06 case-six/case';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [])

  if (loading) return <Loading />;

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/" exact element={<Home />} />
            <Route path="/talents" element={<Talent />} />
            <Route path="/esports" element={<Esport />} />
            <Route path="/projects/case-one" element={<CaseOne />} />
            <Route path="/projects/case-two" element={<CaseTwo />} />
            <Route path="/projects/case-three" element={<CaseThree />} />
            <Route path="/projects/case-four" element={<CaseFour />} />
            <Route path="/projects/case-five" element={<CaseFive />} />
            <Route path="/projects/case-six" element={<CaseSix />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
