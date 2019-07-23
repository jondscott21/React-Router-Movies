import React from 'react';
import { NavLink, Link } from "react-router-dom";

const SavedList = props => {
  console.log(props)
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movies/${movie.id}`} key={movie.id} activeClassName="saved-movie">{movie.title}</NavLink>
      ))}
      <div className="home-button"><Link to="/">Home</Link></div>
    </div>
  );
}
 

export default SavedList;
