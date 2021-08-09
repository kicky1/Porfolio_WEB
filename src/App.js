import './App.css';
import Home from './pages/index';

import {BrowserRouter as Router} from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"


function App() {

  return (
    <Router>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={8}
      />
      <Home/>
    </Router>
  );
}

export default App;
