import 'bootstrap/dist/css/bootstrap.min.css';
import NF from './Pages/NotFound';
import HP from './Pages/Homepage';
import LR from './Pages/LebaneseRevolution';
import AE from './Pages/AugustExplosion';
import AU from './Pages/AboutUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/home' exact component={HP}/>
          <Route path='/LebaneseRevolution' exact component={LR}/>
          <Route path='/AugustExplosion' exact component={AE}/>
          <Route path="/aboutus" exact component={AU}/>
          <Route component={NF}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;