# startup
# the initial design for my project is a website roulette game, with an score that increments based on how spins/rounds you go in the game. If you lose the roulette game, the game will blacklist your username/email making it so you can only view the scoreboard after you lose.
# idea uses authentication through email
# scoreboard where you can see other's scores + live feed of users losing
# multiple tabs for cleaner UI on both mobile and pc view 
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
