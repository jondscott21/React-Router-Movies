import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Movie from './Movies/Movie'
import  MovieList from './Movies/MovieList'

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router addToSavedList={addToSavedList}>
      <div>
        <SavedList list={savedList} />
        <Switch>
          <Route path="/" exact component={MovieList} ></Route>
          <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList}></Movie>} ></Route>
        </Switch>
      </div>

      
    </Router>
  );
};

export default App;
