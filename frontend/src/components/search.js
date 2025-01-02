import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import Results from "./results.js";
import "../css/styles.css";

const Search = () => {
  // Manage form inputs, results, favourites, and category selection
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("CATEGORIES");

  // Add a media item to the favourites list
  const addFavourite = (favourite) => {
    const updatedFavourites = [...favourites, favourite];
    setFavourites(updatedFavourites);
    localStorage.setItem("Favourites", JSON.stringify(updatedFavourites));
    alert("You have added an item to your favourites list");
  };

  // Retrieve stored favourites from localStorage on initial load
  useEffect(() => {
    const favouritesFromStorage = localStorage.getItem("Favourites");
    if (favouritesFromStorage) {
      const parsedFavourites = JSON.parse(favouritesFromStorage);
      if (Array.isArray(parsedFavourites)) {
        setFavourites(parsedFavourites);
      }
    }
  }, []);

  // Categories object to map category names to their corresponding media types for the API
  const categories = {
    MUSIC: "song",
    MUSICVIDEOS: "musicVideo",
    APPS: "software",
    EBOOKS: "ebook",
    AUDIOBOOKS: "audiobook",
    PODCASTS: "podcast",
    MOVIES: "movie",
    TVSHOWS: "tvSeason",
  };

  // Submit search form and fetch results from the API
  const submitSearch = (e) => {
    e.preventDefault();
    axios
      .get(`/search?name=${name}&type=${type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const queryAdded = res.data.results; // Get results from API response
        setResults(queryAdded ? queryAdded : []); // Update state with the results
      })
      .catch((err) => {
        console.log(err); // Log any error encountered during the request
      });
  };

  return (
    <div id="container">
      <div id="content">
        <div className="intro">
          Find your favourite music, movies, podcasts and more
          <br />
          <h5>Click a category and get started!</h5>
        </div>

        {/* Search input and button section */}
        <div className="search-container">
          <input
            type="text"
            placeholder="music, videos, audiobooks, ebooks, movies..."
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="search-input"
          />
          <button
            id="search-btn"
            type="submit"
            onClick={submitSearch}
            className="search-button"
          >
            Search
          </button>
        </div>

        {/* Categories dropdown for selecting media type */}
        <DropdownButton
          as={ButtonGroup}
          variant="info"
          id="dropdown-basic"
          drop="right"
          title={selectedCategory}
          size="md"
          className="category-dropdown"
        >
          {Object.keys(categories).map((category, i) => (
            <Dropdown.Item
              as="button"
              key={i}
              onClick={() => {
                setType(categories[category]);
                setSelectedCategory(category);
              }}
              className="category-item"
            >
              {category}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      {/* Results section displaying the search results */}
      <div className="search-page">
        <div className="container-fluid">
          <Row md={2}>
            {results.length ? (
              results.map((content, i) => (
                <Results
                  key={i}
                  addFavourite={addFavourite}
                  content={content}
                />
              ))
            ) : (
              <div>No results found</div>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Search;
