import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../css/results.css';

/**
 * Created a functional card component containing the content of our media items that have been passed as props.
 * The media card content will be displayed once the user searches for a specific item.
 * The content displayed will include the image, title, artist's name, kind of media, genre, add favourites and more info link.
 */
const Results = (props) => {
  return (
    <div className="col-sm-6">
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.content.artworkUrl100}
              alt="media"
              className="results-image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <strong>{props.content.trackName}</strong> by{' '}
                {props.content.artistName}
              </h5>
              <p className="card-text">Kind: {props.content.kind} </p>
              <span>&nbsp;|&nbsp;</span>
              <p className="card-text">
                Genre: {props.content.primaryGenreName}
              </p>
              <br />
              <button
                className="card-add-btn"
                id="add-btn"
                onClick={() => props.addFavourite(props.content)}
              >
                <FontAwesomeIcon icon={faHeart} title="Add to Favourites" />
                LIKE
              </button>{' '}
              <button id="info-btn" className="card-info-btn" title="More Info">
                <FontAwesomeIcon icon={faInfoCircle} title="More Info" />
                MORE INFO
              </button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*We export the 'Results' component in order to display this code in App.js.*/
export default Results;
