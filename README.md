# Vice Feed
## Vice News API CRUD App

# Project Overview

## Project Schedule

The schedule below reflects the required deadlines and was used to keep track of developer progress to align with expectations. Approval for deliverables was required by the end of the corresponding day excluding `Saturday` and `Sunday`.


| Day         | Deliverable                    |
| ----------- | ------------------------------ |
| Day 1: Wed  | Wireframes and Game Approval   |
| Day 2: Thur | CSS and Server running         |
| Day 3: Fri  | API Data populated to Page     |
| Day 4: Sat  | Routes and Models              |
| Day 5: Sun  | Forms / Sign in                |
| Day 6: Mon  | Bugs / Video / Prep            |
| Day 7: Tues | Project Presentations          |

## Project Description

Vice Feed uses the Vice API to create a scrollable column of news articles. The app will have full CRUD App functionality; save article to database, view, full article, edit article, delete from database and sign in flow with encrypted authentication.

![Final Version](http://)

## Priority Matrix

Prioritized features include the following:

-   Server and MVC
-   Vice API to populate home page
-   Log in flow
-   EJS for all views
-   Save articles to database
-   View Full article
-   Edit articles that have been saved
-   Delete articles from database
-   Page to display full list of saved articles

## Tech Requirements

-   HTML / EJS: Your HTML should be semantic and valid. Your app uses EJS to render information on the page.
-   Node and Express: Your app will need to have its own server, built using Express.
-   MVC Pattern: Your app uses Models, Views, Controllers pattern we have gone over in class.
-   SQL / PG-PROMISE: Your app will need to persist data. Your app should have at least two related models.
-   Third-party API call from the back-end using any NPM package of your choosing.
-   CSS & Design: Your app should be pleasing to look at. Your design should take usability into account.


### MVP/PostMVP

The functionality is divided into two separate lists: MPV and PostMVP.

| Component      | MPV / PostMVP | Estimated Time | Actual Invested |
| -------------- | :-----------: |  :-----------: | :-------------: |
| Design         | MPV           | 1hrs           | 1hrs            |
| Mobile Design  | MPV           | 1hrs           | 0hrs            |
| API            | MPV           | 1hrs           | 6hrs            |
| Database       | MPV           | 3hrs           | 0hrs            |
| Routes         | MPV           | 2hrs           | 0hrs            |
| Controller     | MPV           | 2hrs           | 0hrs            |
| Form           | MPV           | 1hrs           | 0hrs            |
| Sign-in Flow   | MPV           | 5min           | 0hrs            |
| ESJ Views      | PostMVP       | 2hrs           | 0hrs            |


## Wireframes

![Whiteboard Wireframe](./whiteboarding.png)
![Final Wireframe](./witeframe.png)

## App Components

### Landing Page

When the app is loaded the user is directed to the sign-in page:

-   Input for username and password
-   User is authenticated
-   Information is authorized
-   Home page is loaded on authorized approval

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


## Functional Components

The following code is encapsulated for the purpose of reusability.


| Function     | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| Article View | Article view is rendered by clicking button on multiple pages in app |


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

## Change Log


## Issues and Resolutions

ERROR:

RESOLUTION:
