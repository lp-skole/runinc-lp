import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './globalStyles/reset.scss';
import './App.scss';
import Header from './components/Layout/Header/Header';
import Home from './pages/Home';
import Event from './pages/Event';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/events" component={Event}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/contactus" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;