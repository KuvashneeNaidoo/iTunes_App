import React, { useState } from "react";
import TrackModal from "./TrackModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../css/styles.css";

/**
 * Card component contains the content of media items that have been passed as props.
 * Media card content is displayed once the user searches for a specific item.
 */

const Results = (props) => {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Handler for showing the modal when the "More Info" button is clicked
  const onMoreInfoClick = () => {
    setShowModal(true);
  };

  // Card details of media
  return (
    <div className="col-sm-6">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
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
                <strong>{props.content.trackName}</strong> by{" "}
                {props.content.artistName}
              </h5>
              <p className="card-text">Kind: {props.content.kind}</p>
              <p className="card-text">
                Genre: {props.content.primaryGenreName}
              </p>
              {props.content.previewUrl && (
                <audio controls>
                  <source src={props.content.previewUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
              <br />
              <button
                className="card-add-btn"
                id="add-btn"
                onClick={() => props.addFavourite(props.content)}
              >
                <FontAwesomeIcon icon={faHeart} /> LIKE
              </button>{" "}
              <button
                id="info-btn"
                className="card-info-btn"
                title="More Info"
                onClick={onMoreInfoClick}
              >
                <FontAwesomeIcon icon={faInfoCircle} /> MORE INFO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TrackModal to pass the track details */}
      <TrackModal
        show={showModal}
        onClose={() => setShowModal(false)}
        trackDetails={props.content}
      />
    </div>
  );
};

export default Results;
