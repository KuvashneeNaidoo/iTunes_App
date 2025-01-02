import React from "react";
import { Modal, Button } from "react-bootstrap";

const TrackModal = ({ show, onClose, trackDetails }) => {
  // Determine the correct URL based on the media type
  const viewUrl = trackDetails.collectionViewUrl || trackDetails.trackViewUrl;

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Media Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{trackDetails.trackName}</h5>
        <p>
          <strong>Artist:</strong> {trackDetails.artistName}
        </p>
        <p>
          <strong>Album:</strong> {trackDetails.collectionName}
        </p>
        <p>
          <strong>Genre:</strong> {trackDetails.primaryGenreName}
        </p>
        <p>
          <strong>Release Date:</strong>{" "}
          {new Date(trackDetails.releaseDate).toLocaleDateString()}
        </p>
      </Modal.Body>
      <Modal.Footer>
        {viewUrl ? (
          <Button variant="dark" href={viewUrl} target="_blank">
            View on iTunes
          </Button>
        ) : (
          <Button variant="primary" disabled>
            No link available
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default TrackModal;
