startup
the initial design for my project is a website roulette game, with an score that increments based on how spins/rounds you go in the game. If you lose the roulette game, the game will blacklist your username/email making it so you can only view the scoreboard after you lose.
idea uses authentication through email
scoreboard where you can see other's scores + live feed of users losing
multiple tabs for cleaner UI on both mobile and pc view 
<img src="https://scontent.fslc3-2.fna.fbcdn.net/v/t1.15752-9/327088202_1200520557516665_2494141937951662307_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fb9uk9B4h1sAX9-fe-p&tn=mQJXR0Q6KmmB9lIS&_nc_ht=scontent.fslc3-2.fna&oh=03_AdRnv1YbfQtKj2KaSq_sPXANiZnVYESePLa0cCXy6E5M8A&oe=63FC11AB;v=4" alt="@vwj1776" size="20" height="20" width="20" data-view-component="true" class="avatar avatar-small circle">
![Startup drawing](https://user-images.githubusercontent.com/123608245/215240402-6cda7dea-e475-4274-88e0-549a5abfac57.jpg)


![grU4VrTscKgjJRMgUU6wiH-1200-80](https://user-images.githubusercontent.com/123608245/217030986-e80c83bd-45ed-457b-a6c0-023753a0cab6.jpg)
I enjoyed figuring out how to apply all the changes to my wesbite, definitely a challenge


Main things with CSS use https://www.quackit.com/css/css_color_codes.cfm for color hex codes
remember different sections for easier and more concise work. 

don't put repositories inside of other repositories -keep them in seperate folders
make the ui design clean and not gross, not all over then place with things like color and everything


//authentication notes/layout used for html file

//main screen of entering your name
//check if name is not empty
//send to next page
//eventually will do something to where it remembers the name and will actually probably update it in the future to where its via email authentication
//will be done either through special characters or just main + strings
//and later figure out how to blacklist names upon hitting the death mark
//but for now it will just take you to the wheel image with the button

MIDTERM NOTES
Regex notes:
The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.
/    /
flags:
g -global/more than once
i -case insensitive
m -multiline
s -singleline
x -extended
u -ungreedy

ex of adding Javascript to HTML
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>















Startup To Do List:
HTML:
Create 3 more html files each linking to the main login screen, the game itself, and the scores screen
add a peg to the file to show where the wheel stops
CSS:
Create css files for each
fix the wheel, making it an actual png file rather than the garbage it currently is
idk if the spin animation is added through css or js
JS:
Make sure all the pages line up ie when you click on a different one it works
all the buttons are functional
code the wheel to be either a win or lose depending on color/space
make sure the score tallys up and saves
displays score when you lose

Update/notes as of startup js assignment:

Haven't gotten it to blacklist you upon losing yet, I was more focused on getting the main thing to work. Am working on how to do. 




Backend Notes:
step 1 make sure node and express are installed
step 2 create an index.js file //make sure it creates a route handler and starts the server
step 3 run with node.js or probably deployService

Simon Backend Note:
make sure you dont overwrite repositories
make sure the fetch command works correctly

Backend API & Database Notes for startup:
- Use a create and login feature similar to Simon though whenever you attempt to hit the login with hitting create the error message specifically tells you to create a name before logining in
- using this storage method and logining in method banning the account might be do-able through listing them as good by default then upon losing switch the account to locked or something
- will probably have to develop separate css files for each section (not too big)
- storing scores will probably be similar to Simon
- I messed up the repository so I might need to initialize it before I edit the code again

Websocket breakdown as what is happening in peerProxy.js:
- When a new PeerProxy object is created, it sets up a WebSocket server by creating a new instance of the WebSocketServer class with the noServer option set to true. It also listens for an upgrade event on the HTTP server and handles the protocol upgrade from HTTP to WebSocket using the handleUpgrade method of the WebSocket server instance
- The PeerProxy class keeps track of all the WebSocket connections in an array called connections. When a new connection is established, it generates a unique ID for the connection using the uuid.v4() function and adds it to the connections array. It then listens for message, close, and pong events on the WebSocket connection
- When a message event is received, the PeerProxy class iterates through all the connections in the connections array and sends the message to all other connections except the sender.
- When a close event is received, the PeerProxy class removes the closed connection from the connections array.
- When a pong event is received, the PeerProxy class marks the connection as alive.
- The PeerProxy class also sets up a timer using the setInterval function to send ping messages to all connections in the connections array every 10 seconds. If a connection does not respond to a ping message, it is terminated using the terminate method of the WebSocket instance.
- Finally, the PeerProxy class is exported as a module.
Startup notes:
- In the end I wasnt able to get the auto ban to work, but I got a lot done to where im happy with how it turned out(for a while the databases werent working properly)
- 

More Simon Notes:
- Make sure you re-organize files so that you can convert to react
- Convert React to Bootstrap
- install the components into the proper files 
- create and write the app.jsx and the other .jsx files
- convert everything to react components
