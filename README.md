# Audiobook Review and Rating System Documentation

Deployed Application Link: https://audiobook-frontend.onrender.com/

Deployed Server link: https://audiobook-backend.onrender.com/api/audiobooks

## Table of Contents

1. [Introduction](#introduction)
2. [Application Architecture](#application-architecture)
3. [API Usage](#api-usage)
   - [Get All Audiobooks](#get-all-audiobooks)
   - [Get an Audiobook by ID](#get-an-audiobook-by-id)
   - [Post a Review](#post-a-review)
4. [Deployment Steps](#deployment-steps)

## Landing Page with list of all audiobooks
![Audiobooks-Catalogue](https://github.com/adarshpalaskar1/audiobook-frontend/assets/83298237/00f0fd3b-e815-4172-98f5-a9d1f2d2c00e)

## Details for each audiobook
![Audiobooks-Catalogue (1)](https://github.com/adarshpalaskar1/audiobook-frontend/assets/83298237/b2a8ef4b-cc82-46a5-8caa-a514356d51d0)

## Introduction

This documentation provides an overview of the application, including its architecture, API usage, and steps for deployment. The application allows users to browse audiobooks, view details, and post reviews.

## Application Architecture

### Overview

The application is built using a **MERN (MongoDB, Express, React, Node.js)** stack:

- **MongoDB**: Database for storing audiobook data and reviews.
- **Express**: Backend framework for handling API requests.
- **React**: Frontend library for building user interfaces.
- **Node.js**: Runtime environment for executing JavaScript on the server.


### Components

- **Backend**: Handles API requests, interacts with the MongoDB database, and serves data to the frontend.
  - **Models**: Defines the MongoDB schemas.
  - **Routes**: Contains API endpoints.
  - **server.js**: Entry point for the backend server.

- **Frontend**: Manages the user interface and interactions.
  - **Components**: Contains React components for different parts of the application.
  - **Services**: Contains API call functions.

#### Overall Application Architecture
![mermaid-diagram-2024-05-27-112926](https://github.com/adarshpalaskar1/audiobook-backend/assets/83298237/acda7d09-6b8a-4a23-9432-2b0f832676e4)

#### User Interaction Flow
![mermaid-diagram-2024-05-27-113044](https://github.com/adarshpalaskar1/audiobook-backend/assets/83298237/483f607a-84ec-4944-8215-a77dbc07ce55)


## API Usage

### API Request Handling

![mermaid-diagram-2024-05-27-114601](https://github.com/adarshpalaskar1/audiobook-backend/assets/83298237/3fa4b9f7-2b50-4dbf-ad6b-33a23007eb63)

### Base URL

The base URL for the API is determined by the environment configuration.

### Endpoints

#### Get All Audiobooks

- **URL**: `/api/audiobooks`
- **Method**: `GET`
- **Query Parameters**:
  - `genre` (optional): Filter by genre.
  - `author` (optional): Filter by author.
  - `rating` (optional): Filter by minimum rating.
  - `searchTerm` (optional): Search term for title, author, or description.
- **Response**: JSON array of audiobook objects.

```json
[
  {
    "_id": "60c72b2f4f1a2c001c9d4b7a",
    "title": "Sample Audiobook",
    "author": "Author Name",
    "genre": "Genre",
    "averageRating": 4.5,
    "reviews": [...]
  }
]
```

#### Get an Audiobook by ID

- **URL**: `/api/audiobooks/:id`
- **Method**: `GET`
- **Response**: JSON object of the audiobook.

```json
{
  "_id": "60c72b2f4f1a2c001c9d4b7a",
  "title": "Sample Audiobook",
  "author": "Author Name",
  "genre": "Genre",
  "averageRating": 4.5,
  "reviews": [...]
}
```

#### Post a Review

- **URL**: /api/audiobooks/:id/reviews
- **Method**: POST
- **Request Body**: JSON object containing the review details.

```json
{
  "user": "User Name",
  "rating": 5,
  "comment": "Great audiobook!"
}
```
- **Response**: JSON object of the posted review.

```json
{
  "user": "User Name",
  "rating": 5,
  "comment": "Great audiobook!"
}
```

## Deployment Steps

### Prerequisites

- Node.js and npm installed.
- MongoDB instance (local or cloud).
- GitHub repository for the project.

### Backend Deployment

1. **Clone the Repository**:

 ```sh
 git clone https://github.com/username/audiobook-backend.git
 cd audiobook-backend
```

2. **Install Dependencies**:

```sh
node install
```

3. **Configure Environment Variables**: 

- Create a .env file in the backend directory.
- Add the following variables:
  ```
  MONGO_URI=your_mongodb_uri
  PORT=5000
  ```
4. **Update Database**:

```
node seed.js
```

5. **Start the Backend Server**:
```
node server.js
```

### Frontend Deployment

1. **Clone the Repository**:
```
git clone https://github.com/username/audiobook-frontend.git
cd audiobook-frontend
```

2. **Configure Environment Variables**:
- Create a `.env` file with `REACT_APP_API_URL`

3. **Build the Application**:
```
npm run build
```


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
