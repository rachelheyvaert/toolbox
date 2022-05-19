# Welcome to Tool Box
Tool Box is a React single page web application with client-side routing and a RESTful API backend via a JSON-server. The user is able to create, store, and choose activities to save to a planner. The activities can be changed to suit the users needs. The default activities are related to areas of communication targeted by pediatric Speech-Language Pathologists.
 
## Installation
 
Fork and clone the repository into your desired directory. Open the repo and run "npm install && npm start". The database of stocks can be found in a JSON-server, so after you start your React server, make sure to start your JSON-server on http://localhost:3001/acttivities.
 
To install: npm install -g json-server
To start: json-server --watch db.json --port 3001
 
## Usage
When the React server starts, the user will see the Home Page with a navigation bar atop the page.
//INSTER PICTURE
When the user clicks on the Activities list, all the activities stored/created will be shown. A search bar is provided to allow the user to search for a specific task or exercise. Only activities matching in name will be shown.
GIF
The user may click "Add" to save the activity to the Planner section. If the selection was by mistake, selecting the same button will remove it from the plan.
 
Navigating to the Planner section will display all the activities that have been selected. If the task has been completed or is no longer desired clicking the activity will  remove it from the page.
Gif
 
If the user wishes to delete an activity, you may do so by clicking the trash can icon on the specific activity card.
gif
 
 
## Looking Ahead
In the future there will be a filter to sort both alphabetically and by target area next to the search bar.
 
## Support
For questions, comments or concerns, email rachelheyvaert@gmail.com
 
## Acknowledgement
UI and styling was implemented from MUI
https://mui.com/
