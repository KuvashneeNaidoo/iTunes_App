import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../css/favourites.css';

/*
 * The Favourites function is used to delete items from the users favourites list.
 * The 'deleteItem' is used to delete the respective media item from 'displayFavourites'.
 * The media data is parsed from the local storage and filtered to find the item to be deleted from the index array.
 * The page will be reloaded and updated once an deletion is made.
 * A pop-up notification will inform the user when he/she deletes an item.
 */

const Favourites = () => {
  const deleteItem = (favIndex) => {
    const displayFavourites = JSON.parse(localStorage.getItem('Favourites'));
    const filteredFavourites = displayFavourites.filter(
      (favourite) => favourite !== displayFavourites[favIndex]
    );
    localStorage.setItem('Favourites', JSON.stringify(filteredFavourites));
    alert('The item has been removed from your favourites list');
    window.location.reload();
  };

  /**
   * Within our Favourites component, we also create a state to store our favourite items (represented using bootstrap cards).
   * The state of the inital values will be set to an empty array since the media items added to the favourites list will always be changing.
   * In order to run some functionality, we will use the useEffect hook which will display our media items.
   * The map method gets and returns the respective media items we add to our favourites list.
   * This hook will run after every render and after each time an update is made when the user deletes an item.
   */

  const [displayFavourites, setdisplayFavourites] = useState([]);

  useEffect(() => {
    setdisplayFavourites(JSON.parse(localStorage.getItem('Favourites')));
  }, []);

  // The cards will display the image, title, artist's name, kind of media, genre, delete and more info link.
  return (
    <main className="container fluid text-center">
      <h1 className="favheading">My Favourites</h1>
      <section className="row justify-content-md-center">
        {displayFavourites.length > 0
          ? displayFavourites.map((content, index) => {
              return (
                <div className="col-sm-6" key={index}>
                  <div className="card mb-3" style={{ maxWidth: '540px' }}>
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
                            <strong>{content.trackName}</strong> by{' '}
                            {content.artistName}
                          </h5>
                          <p className="card-text">Kind: {content.kind}</p>
                          <span>&nbsp;|&nbsp;</span>
                          <p className="card-text">
                            Genre: {content.primaryGenreName}
                          </p>
                          <br />
                          <button
                            id="delete-btn"
                            className="card-delete-btn"
                            onClick={() => deleteItem(index)}
                          >
                            <FontAwesomeIcon icon={faTrashCan} title="Delete" />
                            DELETE
                          </button>{' '}
                          <button id="info-btn" className="card-info-btn">
                            <FontAwesomeIcon
                              icon={faInfoCircle}
                              title="More Info"
                            />
                            MORE INFO
                          </button>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : 'No items have been added yet.'}
      </section>
    </main>
  );
};

// We export the 'Favourites' component in order to display this code in App.js.
export default Favourites;
