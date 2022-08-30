import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Results from './results.js';
import '../css/search.css';

/**
 * Within our Search component, we will begin by creating some states to store our media items and their functions in for this iTunes app.
 * The states of the inital values will be set to an empty array since the values will always be changing.
 * We use the useState hook to declare our variables.
 * This will help to preserve our values when different functions are called.
 * The addFavourite function will be used to add media items to the users favourites list.
 * A pop-up notification will inform the user when he/she adds an item.
 */

const Search = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (favourite) => {
    setFavourites([...favourites, favourite]);
    alert('You have added an item to your favourites list');
  };

  /**
   * In order to run some functionality, we will use the useEffect hook which will display our media items once the search button is clicked.
   * The map method will add the respective media items to our favourites list.
   * This hook will run after every render and after each time an update is made when the user adds an item.
   */
  useEffect(() => {
    localStorage.setItem('Favourites', JSON.stringify(favourites));
  }, [favourites]);

  /*
   * Created a nameEntry function which will be used to get the name of our search query.
   * Once the search query is made, the result will be returned and the state will be updated.
   */
  let nameEntry = '';
  const nameSubmit = (e) => {
    const entry = e.target.value;
    nameEntry = entry;
    setName(nameEntry);
  };

  // The following categories will be displayed when the user clicks on the dropdown menu button.
  const categories = {
    CATEGORIES: 'allTrack',
    MUSIC: 'song',
    MUSICVIDEOS: 'musicVideo',
    APPS: 'software',
    EBOOKS: 'ebook',
    AUDIOBOOKS: 'audiobook',
    PODCASTS: 'podcast',
    MOVIES: 'movie',
    TVSHOWS: 'tvSeason',
    SHORTFILMS: 'shortFilm',
  };

  const submitSearch = (e) => {
    e.preventDefault();

    /* The axios library and the get() method will get the media data from the itunes search api.
    If the search result request is unsuccessful, an error will occur. */
    axios
      .get(`/search?name=${name}&type=${type}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const queryAdded = res.data.results;
        setResults(queryAdded ? queryAdded : []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
   * A search input field is created whereby the user will enter the media item of choice.
   * Once the search button is clicked, this data will be returned.
   * For the dropdown menu, we set the type of media categories whereby the name is set as the key and the value is set as the type.
   * If the results we request for is not 0, the map() method will filter and return the respective results.
   * After our results appear, we will also set the addFavourites functionality so the user can add his/her favourite media items.
   */
  return (
    <div id="container">
      <div id="content">
        <div className="intro">
          Find your favourite music, movies, podcasts and more
          <br />
          <h5>Click a category and get started!</h5>
        </div>
        <div id="searchinput">
          <input
            type="text"
            placeholder="music, videos, audiobooks, ebooks, movies..."
            name="name"
            onChange={(e) => nameSubmit(e)}
          />
          <Link to={`/search`}>
            <button
              id="search-btn"
              type="submit"
              onClick={(e) => submitSearch(e)}
            >
              <FontAwesomeIcon icon={faSearch} title="Search" />
            </button>
          </Link>
        </div>

        <DropdownButton
          as={ButtonGroup}
          variant="info"
          id="dropdown-basic"
          drop="right"
          title="CATEGORIES"
          size="md"
        >
          {Object.keys(categories).map((category, i) => (
            <Dropdown.Item
              as="button"
              key={i}
              type="submit"
              name="category"
              title="Categories"
              id="searchcategories"
              value={category.value}
              active={type === category.value}
              onClick={(e) => setType(categories[category])}
            >
              {category}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      <div className="search-page">
        <div className="container-fluid">
          <Row md={2}>
            {results.length !== 0 ? (
              results.map((content, i) => (
                <Results
                  key={i}
                  addFavourite={addFavourite}
                  content={content}
                />
              ))
            ) : (
              <div></div>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

/*We export the 'Search' component in order to display this code in App.js.*/
export default Search;
