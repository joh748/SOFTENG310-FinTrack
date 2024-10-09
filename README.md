<!-- Improved compatibility of back to top link -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Taks0708/SOFTENG310-FinTrack">
    <img src="frontend\src\assets\images\FintrackLogo.png" alt="Logo" width="750" height="217"> 
  </a>

  <h3 align="center">Financial Tracker</h3>

  <p align="center">
    Financial Tracker for SOFTENG 310 Project at the University of Auckland by Team Meow Meow Kitty Cats (Group 6). This project allows users to input and track their income and expenses for a certain period. 
    <br />
    <a href="https://github.com/Taks0708/SOFTENG310-FinTrack"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Taks0708/SOFTENG310-FinTrack/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Taks0708/SOFTENG310-FinTrack/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#available-scripts">Available Scripts></a></li>
    <li><a href="#configuration-of-the-env-file">Configuration of the .env File</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#libralies/apis">Libraries/APIs</a></li>
    <li><a href="#learn-more">Learn More</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The project is a web app that uses React.js and Tailwind for the frontend, and Express.js for the backend. The database used is PostgreSQL.

To run the web app locally, make sure to run the frontend and backend in separate terminals. If you come across errors with logging in, the backend probably isn't running.

You can contact UPI `yois920` with an email or message Discord username `Taks7`. Please only contact us if you are absolutely stuck with the set up after the project is handed off.

### Built With
* [![React][React.js]][React-url]
* [![Express][Express.js]][Express-url]
* [![PostgreSQL][PostgreSQL.url]][PostgreSQL-url]
* [![Tailwind CSS][Tailwind.url]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js and npm installed:
* [Node.js](https://nodejs.org/en/download/)

Check if npm is installed:
```bash
npm -v
```

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/Taks0708/SOFTENG310-FinTrack.git
   ```
2. Navigate to the project directory
   ```bash
   cd SOFTENG310-FinTrack
   ```
3. Install dependencies for the frontend and backend separately.

#### Frontend
```bash
cd frontend
npm install
```

To run the frontend:
```bash
npm start
```

#### Backend
```bash
cd backend
npm install
```

To run the backend:
```bash
npm start
```

<!-- Testing -->
## Testing

The backend has some unit tests for the controller classes to ensure that the functions registered to each endpoint works. In order to run these tests, go to the **backend directory** and enter:

`npm start`

The coverage of these tests can be seen by entering the following when in the backend directory:

`npm run coverage`

Do note that this will generate some folders in the backend directory. These folders have already been added to the .gitignore, and shouldn't be pushed to the main repository.

If the tests fail, make sure that all backend dependencies have been installed. If, for some reason, they aren't being installed by an `npm install`, enter `npm install --save-dev mocha chai sinon nyc` .

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Available Scripts-->
## Available Scripts

In the frontend directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Configuration of the .env file -->
## Configuration of the .env File

In order to access the PostgreSQL database hosted by Aiven for storing user and transaction data, a `.env` file is required in the `backend` folder. This file should include the following fields:

```
PG_USER=<your_database_user>
PG_HOST=<your_database_host>
PG_DATABASE=<your_database_name>
PG_PASSWORD=<your_database_password>
PG_PORT=<your_database_port>
CA_CERT_PATH=../certs/ca.crt
CIPHER=<your_cipher_string>
REACT_APP_GEMINI_API_KEY=<your_gemini_api_key>
```

### Instructions:

1. **Obtain the .env File**: Please contact us to get the .env file, as it isn't pushed to GitHub. You may also need to create your own PostgreSQL database on Aiven for personal security reasons. 

2. **Creating a PostgreSQL Database**: Follow the instructions on the [Aiven website][Aiven-url] to create your PostgreSQL database. 

3. **Fill in the .env File**: After creating your database, fill in the fields in the `.env` file with your database's information:
   - `PG_USER`: Your database user.
   - `PG_HOST`: The host of your database.
   - `PG_DATABASE`: The name of your database.
   - `PG_PASSWORD`: Your database password.
   - `PG_PORT`: The port number (default is usually 5432).
   - `CIPHER`: This can be any string you want; it's used to encrypt tokens.
   - `REACT_APP_GEMINI_API_KEY`: This can be created on the [Gemini API page][Gemini-AppKey-url].

4. **Place the .env File**: Once the .env file is configured, place it in the `backend` folder.

5. **CA Certificate**: Ensure that you have your CA certificate from Aiven in the file `backend/src/certs/ca.crt`, as the `CA_CERT_PATH` is prefilled.

Once these steps are completed, the database should work automatically, regardless of whose database you're using. If you encounter any errors, double-check that all fields are filled out correctly.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the Apache-2.0 License. See [Licnese][license-url] for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

You can contact UPI yois920 with an email or message Discord username Taks7. Please only contact us if you are absolutely stuck with the set up after the project is handed off.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Libraries/APIs -->
## Libraries/APIs

This project utilizes several libraries and APIs to enhance functionality:

* **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
* **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for styling.
* **[Express](https://expressjs.com/)**: A minimal and flexible Node.js web application framework.
* **[Axios](https://axios-http.com/docs/intro)**: A promise-based HTTP client for making requests to the backend.
* **[Recharts](https://recharts.org/en-US/)**: A charting library for creating graphical representations of transaction history.
* **[date-fns](https://date-fns.org/)**: A modern JavaScript date utility library for manipulating dates.
* **[Gemini API](https://ai.google.dev/api?lang=node)**: Used for providing financial advice to users.
* **[Chai](https://www.chaijs.com/)**: An assertion library for Node.js and browsers, used for testing.
* **[Sinon](https://sinonjs.org/)**: A library for creating spies, mocks, and stubs for JavaScript testing.

Feel free to refer to the documentation of each library/API for more information on their usage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LEARN MORE -->
## Learn More

To learn more about the technologies and frameworks used in this project, check out the following links:

* **[Create React App Documentation](https://github.com/facebook/create-react-app)**: Information about getting started with Create React App.
* **[React Documentation](https://reactjs.org/docs/getting-started.html)**: Official React documentation.
* **[Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)**: Learn about code splitting in React apps.
* **[Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)**: Techniques to analyze your bundle size.
* **[Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)**: Guide to making your app a PWA.
* **[Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)**: Configuration details for Create React App.
* **[Deployment](https://facebook.github.io/create-react-app/docs/deployment)**: Instructions for deploying your React app.
* **[Troubleshooting](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)**: Tips for common issues, including build failures.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Shields.io](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Taks0708/SOFTENG310-FinTrack.svg?style=for-the-badge
[contributors-url]: https://github.com/Taks0708/SOFTENG310-FinTrack/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Taks0708/SOFTENG310-FinTrack.svg?style=for-the-badge
[forks-url]: https://github.com/Taks0708/SOFTENG310-FinTrack/network/members
[stars-shield]: https://img.shields.io/github/stars/Taks0708/SOFTENG310-FinTrack.svg?style=for-the-badge
[stars-url]: https://github.com/Taks0708/SOFTENG310-FinTrack/stargazers
[issues-shield]: https://img.shields.io/github/issues/Taks0708/SOFTENG310-FinTrack.svg?style=for-the-badge
[issues-url]: https://github.com/Taks0708/SOFTENG310-FinTrack/issues
[license-shield]: https://img.shields.io/github/license/Taks0708/SOFTENG310-FinTrack.svg?style=for-the-badge
[license-url]: https://github.com/joh748/SOFTENG310-FinTrack/blob/96a0d5a588a086a2ddd1c94ebb5fbb29a651cebf/LICENSE
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[PostgreSQL.url]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Tailwind.url]: https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Aiven-url]: https://aiven.io/postgresql
[Gemini-AppKey-url]: https://aistudio.google.com/app/apikey