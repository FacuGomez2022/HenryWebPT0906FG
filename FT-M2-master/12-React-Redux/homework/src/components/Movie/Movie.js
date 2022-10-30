import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){
    const movieID = this.props.match.params.id;
    this.props.getMovieDetail(movieID)
}

    render() {
        return (
            <div className="movie-detail">
    
        <h3>{this.props.movie.Title}</h3>
        <p>{this.props.movie.Year}</p>
        <img src={this.props.movie.Poster} alt="img not found" />
        <p>{this.props.movie.Plot}</p>
      </div>  
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch (getMovieDetail(id))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movie);