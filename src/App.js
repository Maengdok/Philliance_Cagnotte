import './App.css';

import Participer from './components/Participer';
import ChoisirMontant from './components/ChoisirMontant';
import EntrerMontant from './components/EntrerMontant';
import Confirmation from './components/Confirmation';
import NotFound from './components/NotFound';

import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <HashRouter>
        <main>
          <Switch>
            <Redirect from="/" to="/participer" exact />
            <Route path="/participer" component={Participer} exact />
            <Route path="/choisir-montant" component={ChoisirMontant} exact />
            <Route path="/entrer-montant" component={EntrerMontant} exact />
            <Route path="/confirmation" component={Confirmation} exact />
            <Route path="/not-found" component={NotFound} exact />
          </Switch>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
