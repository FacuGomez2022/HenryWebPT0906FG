import React, { Component } from "react";
import { removeMovieFavorite } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {!this.props.movies? 
            <h2>No tienes peliculas favoritas</h2>
           :this.props.movies.map(m => { 
            return (
                <div key={m.id}>
                  <Link to={`/movie/${m.id}`}>{m.title}</Link>
                  <button
                    onClick={() => this.props.removeMovieFavorite(m.id)}
                  >
                    Remove
                  </button>
                </div>
            )
            })}
          
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

//export default (ConnectedList);
