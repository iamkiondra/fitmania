import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import './App.css';
import NavHeader from './components/NavHeader/NavHeader'
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos'
import HomeFilterTabs from 
'./components/FilterTabs/HomeFiltersTabs/HomeFilterTabs'

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavHeader />
        <Switch>
          <Route exact path="/">
            <div className="app__page">
              <div className="app__filters">
                <HomeFilterTabs/>
              </div>
              <div>
              <RecommendedVideos />
              </div>

            </div>
          </Route>
          <Route exact path="/search/:searchTerm">
            <h1>Search Page</h1>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
