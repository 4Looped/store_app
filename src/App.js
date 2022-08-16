
// import styling
import './App.css';
import { MdImportantDevices } from 'react-icons/md';

// import store data
import stores from './data/stores';
import items from './data/items';

// import React and router
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import navigation
import Navigation from './components/Nav';


// import web pages
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StoresPage from './pages/StoresPage';

function App() {

  return (
    <div className="App">

      <Router>

        <header className="App-header">

          <h1>
            Online Shopping Interface
          </h1>

          <MdImportantDevices className='App-logo' />

          <p>Built using Node, Express, and React</p>

        </header>

        <Navigation />

        <main>

          <article className="App-article">


            <Route path="/(|index.html)" exact>
              <HomePage />
            </Route>
            <Route path="/order">
              <OrderPage items={items} />
            </Route>
            <Route path="/stores">
              <StoresPage stores={stores} />
            </Route>

          </article>


        </main>

        <footer>
          <cite>&copy; 2022 Colin Maloney</cite>
        </footer>

      </Router>

    </div>
  );
}

export default App;
