import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import TrackModal from "./TrackModal";
import "../css/styles.css";

const Favourites = () => {
  // Manage the list of favourite items
  const [displayFavourites, setDisplayFavourites] = useState([]);

  // Manage the modal visibility and selected track details
  const [showModal, setShowModal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  // Fetch favourites from localStorage when the component mounts
  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("Favourites")) || [];
    setDisplayFavourites(favourites);
  }, []);

  // Delete a favourite item by its index
  const deleteItem = (favIndex) => {
    // Retrieve the current list of favourites from localStorage
    const displayFavourites =
      JSON.parse(localStorage.getItem("Favourites")) || [];
    const filteredFavourites = displayFavourites.filter(
      (favourite, index) => index !== favIndex
    );

    // Update localStorage and component state with the new list
    localStorage.setItem("Favourites", JSON.stringify(filteredFavourites));
    setDisplayFavourites(filteredFavourites);

    alert("The item has been removed from your favourites list");
  };

  // Handle "More Info" button click, showing the modal
  const onMoreInfoClick = (track) => {
    setSelectedTrack(track);
    setShowModal(true);
  };

  return (
    <main className="container-fluid text-center">
      {/* Display favourite items or a message if the list is empty */}
      <section className="row justify-content-md-center">
        {displayFavourites.length > 0
          ? displayFavourites.map((content, index) => (
              <div className="col-sm-6" key={index}>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={content.artworkUrl100}
                        alt="media"
                        className="favimage"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <strong>{content.trackName}</strong> by{" "}
                          {content.artistName}
                        </h5>
                        <p className="card-text">Kind: {content.kind}</p>
                        <p className="card-text">
                          Genre: {content.primaryGenreName}
                        </p>
                        <br />
                        {/* Delete */}
                        <button
                          id="delete-btn"
                          className="card-delete-btn"
                          onClick={() => deleteItem(index)}
                        >
                          <FontAwesomeIcon icon={faTrashCan} title="Delete" />
                          DELETE
                        </button>{" "}
                        {/* More Info */}
                        <button
                          id="info-btn"
                          className="card-info-btn"
                          onClick={() => onMoreInfoClick(content)}
                        >
                          <FontAwesomeIcon
                            icon={faInfoCircle}
                            title="More Info"
                          />
                          MORE INFO
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "No items have been added yet."}
      </section>

      {/* Modal for displaying track information */}
      {selectedTrack && (
        <TrackModal
          show={showModal}
          onClose={() => setShowModal(false)}
          trackDetails={selectedTrack}
        />
      )}
    </main>
  );
};

export default Favourites;
