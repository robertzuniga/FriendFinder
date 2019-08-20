# FriendFinder

Friend Finder - Node and Express Servers

Overview

This is a compatibility-based "FriendFinder" application -- basically a dating app. 

This full-stack site takes in results from the users' surveys, then compares their answers with those from other users. 

The app will then display the name and picture of the user with the best overall match.

Express is used to handle routing. 
Heroku is used to deploy the app. ==> https://whispering-peak-65198.herokuapp.com/
----------------------------------------------------------------------------------------

Friend Finder App Features


The survey has 10 questions. 
Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

----------------------------------------------------------------------------------------
The server.js file requires the npm packages: express and path.

The htmlRoutes.js file includes two routes:

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.



The apiRoutes.js file contains two routes:

A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
A POST routes /api/friends. This is used to handle incoming survey results.

The application's data inside of app/data/friends.js is an array of objects. 
Each of these objects follows the format below.


{
  "name":"Maya",
  "photo":"https://raw.githubusercontent.com/robertzuniga/FriendFinder/master/images/02-300.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}

The user's most compatible friend uses the following as a guide:

Converts each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
Then compares the difference between current user's scores against those from other users, question by question. 


Example:


User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

Includes:
The use the absolute value of the differences(no negative solutions) 
i.e The app calculates both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.


Once  the current user's most compatible friend is determined, the result is displayed as a modal pop-up.

The modal displays both the name and picture of the closest match.

Folder/File structure

  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js

----------------------------------------------------------------------------------------
