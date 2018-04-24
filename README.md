# Vice Feed
## Vice News API CRUD App

## Project Description

Vice Feed uses the Vice API to create a scrollable column of news articles. The app will have full CRUD App functionality; save article to database, create custom article, view single article, edit article, delete from database, share url for article, and sign in flow with encrypted authentication.

![Final Version](https://vice-feed.herokuapp.com/login)
![Video Presentation](https://drive.google.com/open?id=1OYmvDtUl6_JSRQ2vISMDMIlW99kdbXnt)

## Priority Matrix

Prioritized features include the following:

-   Server and MVC
-   Vice API to populate home page
-   Log in flow
-   EJS for all views
-   Save articles to database
-   Create custom article
-   Share article URL
-   View Full article
-   Edit articles that have been saved
-   Delete articles from database
-   Page to display full list of saved articles
-   Share button

## Tech Requirements

-   HTML / EJS: Your HTML should be semantic and valid. Your app uses EJS to render information on the page.
-   Node and Express: Your app will need to have its own server, built using Express.
-   MVC Pattern: Your app uses Models, Views, Controllers pattern we have gone over in class.
-   SQL / PG-PROMISE: Your app will need to persist data. Your app should have at least two related models.
-   Third-party API call from the back-end using any NPM package of your choosing.
-   CSS & Design: Your app should be pleasing to look at. Your design should take usability into account.


## Wireframes

![Whiteboard Wireframe](./whiteboarding.png)
![Final Wireframe](./witeframe.png)

## Instructions

-   Download Github repository
-   NPM run from root directory
-   Open localhost:3000


## App Components

### Landing Page

When the app is loaded the user is directed to the sign-in page:

-   Input for username and password
-   User is authenticated
-   Information is authorized
-   Home page is loaded on authorized approval
-   If user is not yet registered, redirect to register form

### Home page

When the user has been authorized to enter the site, the home page will display:

-   Vice API displays news feed
-   User can:
        - Save article to database
        - Create custom articles
        - Edit saved articles from database
        - Delete articles from database
-   Button to view database
-   Button to add custom article to database
-   Log out button with bring the user back to the login page

### Database

The database can be accessed from the button on the home page. The database will display each article preview with a link to view the full article in a separate page.

### Single View

Displays article with GUI buttons for editing, deleting, viewing and sharing.


## Technologies

| Name            | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| Express         | Framework used to build web applications and API's                  |
| Path            | Provides utilities for working with file d directory paths          |
| Morgan          | HTTP request logger for middlewear                                  |
| Method-override | Allows you to alter the default behavior such as put and delete     |
| Body-parser     | Parses incoming request bodies allowing it to be access by req.body |
| Express-session | Allows the application to store a state, used for user login        |
| Bcrypt          | Library that allows hashing and comparing of passwords              |
| EJS             | Templating language to generate HTML markup in Javascript           |
| PG-promise      | PostgreSQL library with built-in promises                           |
| Dotenv          | Storing and configuring variable in the env separate from the code  |
| Nodemon         | Monitors changes in source code and restarts the server             |
| NPM             | Package manager for Javascript                                      |
| Vice API        | Headlines, articles, images, and other article metadata from Vice   |


## Additional Libraries

| Library        | Description                                              |
| -------------- | -------------------------------------------------------- |
| Google Fonts   | Used to set font widely supported by various browsers    |


## Code Snippet

The below code snippet is implemented of the discovery I made while trying to append API data to the DOM, server-side. Data was passed down from the controller and views, then into the ejs view by referencing the res.locals object.

```
data(req, res, next) {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('');

    newsapi.v2.everything({
        q: 'general',
        sources: 'vice-news',
        domains: 'https://news.vice.com',
        from: '2018-01-01',
        to: '2018-04-17',
        language: 'en',
        sortBy: 'publishedAt',
        page: 20
    }).then(data => {
        res.locals.articles = data.articles
        next();
    }).catch(err => {
        next(err);
    })
}
```

## Discoveries

-   Document cannot be referenced server side. The best solution to get API data to render server-side is to pass it through the controller and views, down into the ejs view of your choosing.

## Future Fixes / Features

-   Custom modals for responding to user actions such as logging in, saving/ deleting articles and clicking on share link
-   Make a public list of articles that the does not require sign-in flow

## Issues and Resolutions

ERROR:

RESOLUTION:
