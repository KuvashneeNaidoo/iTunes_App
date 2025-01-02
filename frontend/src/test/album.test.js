// Importing axios to mock HTTP requests
import axios from "axios";
import FirstAlbum from "./album.js";

/**
 * Mocks axios in Jest using jest.mock().
 * Create a mock response and use axios.get.mockResolvedValue to return it.
 * Verifies that the returned title matches the first album's title in the mocked response.
 */
jest.mock("axios");

// Test case to verify FirstAlbum function returns the correct title
it("Returns the title of the first album.", async () => {
  // Mock the response from axios.get
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: "quidem molestiae enim",
      },
      {
        userId: 1,
        id: 2,
        title: "sunt qui excepturi placeat culpa",
      },
    ],
  });

  // Call FirstAlbum and check the returned title
  const title = await FirstAlbum();
  expect(title).toEqual("quidem molestiae enim");
});
