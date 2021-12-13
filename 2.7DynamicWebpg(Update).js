// 2021.12.13 FROM (MM) 
/*----------------------------------*/
/*----------------------------------*/
DYNAMIC WEBPAGES (exos)
// to UPDATE elements


/*----------------------------------*/
// set the content of the heading with the ID "title" to "News"
(HTML)
<!doctype html>
<html>
    <body>
      <h1 id="title">Daily Scoop</h1>
      <script src="script.js"></script>
    </body>
</html>

(JavaScript)
document.getElementById("title").innerHTML = "News"


/*----------------------------------*/
// in the script, store the heading element with the ID "story" in the story VARIABLE
(HTML)
<!doctype html>
<html>
    <body>
      <h1 id="name">Instagram</h1>
      <h2 id="story">Your story</h1>
      <script src="script.js"></script>
    </body>
</html>

(JavaScript)
var story = document.getElementById("story");"


/*----------------------------------*/
// what does this code do?
// it stores the element with the ID "feature" in a feature VARIABLE
(JavaScript)
var feature = document.getElementById("feature");


/*----------------------------------*/
// ACCESS the CONTENT of the paragraph
(HTML)
<!doctype html>
<html>
    <body>
      <h1>Twitter</h1>
      <p id="about">If it's happening anywhere, it's happening on Twitter.</p>
      <script src="script.js"></script>
    </body>
</html>

(JavaScript)
var text = document.getElementById("about").innerHTML;
console.log(text);




