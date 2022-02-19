import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import './../src/index.css';
import './App.css';
import Home from './components/04 home-page/homePage';
import Talent from './components/06 talent-page/talent-page';
import Esport from './components/05 esport-info-page/esport-info-text';
import Loading from './components/03 loader/loading';
import CaseOne from './components/07 projects-pages/01 case-one/case';
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
        </Switch>
      </div>
    </Router>
  )
}

export default App;
