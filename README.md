# FULL FABRIC

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### `npm install`

To install all the dependencies
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### Explanation

The project it is developed in React with Redux and the structure it is by feature, so you can find every part of the feature inside a folder with a semantic name related with the functionallity.
I tryed to use extensively the single responsabilty principle to splitt the React Components as much as I could

The data persist on-reload because I'm storing the state in the localstorage.

I'm using React router so in the root directory '/' you can see the landing and the button to start the game. Once you click the button you get redirected to '/game' and there you can see the two different players and the button to start playing.
When one user has 0 points in hp the game shows the winner and you can start it again clicking the button.
