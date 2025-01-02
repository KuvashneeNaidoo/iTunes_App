# iTunes Full Stack Web Application

## Description

This project is a fullstack web application. Reactjs was used to create the frontend and Express was used to create the backend of this project. Addiitonally, the data used was retrieved from the iTunes api. Users will have the ability to search for specified media content as well as add or remove items to/from their list of favourites.

## Table of Contents

<details open="open">
<ol>
<li><a href="#description">Description</a></li>
<li><a href="#table-of-contents">Table of Contents</a></li>
<li><a href="#deployment">Deployment</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#notice">Notice</a></li>
<li><a href="#credits">Credits</a></li>
</ol>
</details>

## Deployment

This app has been deployed at: https://itunes-app-heroku.herokuapp.com/

## Installation

### Project:

- First, create a folder that will store all the files for this project.

- You can now navigate to the Project's directory by opening up your terminal or command prompt and typing "cd/". For example:

```
cd itunes_app
```

### Backend:

- For the Backend of this project, create the package.json file by typing in:

```
npm init
```

- Thereafter, build your Express app by individually typing npm install --save followed by:

```
axios
cors
express
save helmet
isomorphic-fetch
morgan
nodemon
chai
mocha
```

- After the installation is done, you can run the the backend application by typing in:

```
npm run dev
```

- Open http://localhost:8080/search to run the server in the browser.

#### Note: Security

- For the backend of this project, the Helmet middleware was used to secure this application.

### Frontend:

- For the Frontend of this project, create the react app by typing in:

```
npx create-react-app
```

- Thereafter, build your app by individually typing npm install --save followed by:

```
axios
bootstrap
react-bootstrap
@fortawesome/free-solid-svg-icons
@fortawesome/react-fontawesome
@fortawesome/free-brands-svg-icons
react-router-dom
react-test-renderer
```

- After the installation is done, you can run the the frontend application by typing in:

```
npm start
```

## Testing

### Backend Test

- Mocha, Chai together with the isomorphic-fetch function are used to test the backend of this project.

- The backend test involves testing to determine firstly, if the server connects with the frontend and secondly if the specified search requests are fetched.

To run the backend test, navigate to the servers directory in the command line and type:

```
npm test
```

### Frontend Test

- Axios was used to test the frontend of this project.

- The frontend test involves a snapshot test to determine if the application renders without crashing. We also perform an album test to determine if the first album title is fetched.

To run the frontend test, navigate to the frontend directory in the command line and type:

```
npm test
```

- Open http://localhost:3000 to run the frontend React application in the browser.

## API Keys

- No API keys were used in this project to access the iTunes data.

- If API keys are used, an .env file must be created outside of the src folder. Inside the .env file, the respective key must be added. For example if we want to retrieve weather data, the following can be added:

```
REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = (add your key code here)
```

- For privacy concerns, add this .env file to the .gitignore file to avoid pushing it to gitHub.

## Usage

- The Navigation appears above the Searchbar. The user is able to navigate between the home page and their list of favourite media items.
![Navigation](https://user-images.githubusercontent.com/105747929/187803110-105653e5-f998-452f-9997-74c30397c3e9.png)

- The user can type in their search request in the input field and also select a specific category of their choice. After clicking on the search icon, the results will appear.
![Search](https://user-images.githubusercontent.com/105747929/187803136-3a720640-2d72-4b8c-a9b6-9b9465c341a4.png)

- When viewing the search results, the user can add items to their favourites list by clicking on the "LIKE" button or view more information about the media by clicking on the "MORE INFO" button.
![Add Favourite](https://user-images.githubusercontent.com/105747929/187803167-63e8cfa2-929f-48a5-8f23-1588d92ff392.png)

- To remove items from the favourites list, navigate to the favourites pages and click on the "DELETE" button.
![Delete](https://user-images.githubusercontent.com/105747929/187803200-22e23e91-1e1c-42ba-916d-00c98410127a.png)

## Notice:

When any changes to project items are made, the server will restart and update these changes. This is because the Nodeman devDependency is installed and so these notifications will appear in the console or terminal. You can view the changes made to the frontend of the application by opening http://localhost:3000.

## Credits

- [Bhagatpratham](https://towardsdev.com/how-to-set-up-a-node-js-express-server-for-react-c19104568d12)
- [Eric the Coder](https://dev.to/ericchapman/series/15121)
- [freeCodeCamp](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)
- [HyperionDev](https://youtu.be/nX7jGHgD9t8)
- [Slide Revolution](https://www.sliderrevolution.com/resources/css-animated-background/)
