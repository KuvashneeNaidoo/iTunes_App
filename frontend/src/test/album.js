// Imported axios to make HTTP requests
import axios from "axios";

/*
 * Fetches the first album's title from the JSONPlaceholder API.
 * Function uses the axios.get method to make a GET request to the API endpoint.
 * It retrieves the list of albums and returns the title of the first album.
 */

async function FirstAlbum() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return response.data[0].title;
}

// Export album.js to be tested in album.test.js
export default FirstAlbum;
