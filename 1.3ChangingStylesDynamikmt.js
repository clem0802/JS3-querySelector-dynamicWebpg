// 2021.10.30 FROM (MM) 
/*----------------------------------*/
// CHANGING STYLDES DYNAMICALLY


/*----------------------------------*/
/*----------------------------------*/
// .STYLE.COLOR
// to access an element's styling, first need to add the "style" ATTRIBUTE, (.STYLE)
// then specify the exact style we want, like (.COLOR)

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="showColor()">Show style</button>
        <p style="color:teal">Flowers by Muriel</p>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function showColor() {
    var el = document.querySelector("p"); 
    console.log(el.style.color); //!
}





/*----------------------------------*/
/*----------------------------------*/
// if we want to change an element's style, we have to make sure we put the value in between quotes

//?** (HTML)
<!doctype html>
<html>
    <body>  
        <button onclick="changeColor()">Change Color</button>
        <p>Spygame III - Coming January</p>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function changeColor() {
    var el = document.querySelector("p"); 
    el.style.color = "#d7465f"
}





/*----------------------------------*/
/*----------------------------------*/
//! camelCase
// when having PROPERTITES with multiple words like "background-color"
// need to turn them into "camelCase"
// here use "backgroundColor"

//?** (HTML)
<!doctype html>
<html>
    <body>  
        <button onclick="changeColor()">Change Color</button>
        <p>Spygame III - Coming January</p>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function changeColor() {
    var el = document.querySelector("p"); 
    el.style.backgroundColor = "#d7465f"
}
// the entire background-color of "Spygame III - Coming January" changed to the color #d7465f





/*----------------------------------*/
/*----------------------------------*/
//! VERY HARD
// changing the style with JavaScript works no matter if the previous style was set inline or through a stylesheet
// so, NOT MATTER WHERE THE STYLE WAS SET

//?** (HTML)
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <button onclick="changeStyle()">Update Profile Design</button>
        <br>
        <img src="https://mimo.app/i/hacker.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (CSS)
img {
    background-color: aliceBlue;
    border-radius: 10px;
    border: 2px solid lightGray;
}
button, img, p {
    margin: 10px 0 0 0;
}

//?** (JavaScript)
function addStyleSheet() {
    var el = document.querySelector("img");
    el.style.borderRadius = "45px"; //! 
}
// output: a button "Update Profile Design" + photo of hacker





/*----------------------------------*/
/*----------------------------------*/
// access and display the "p" element's background color

//?** (HTML)
<!doctype html>
<html>
    <body>  
        <button onclick="showColor()">Show Style</button>
        <p style="background-color: aliceBlue">Flowers by Muriel</p>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function changeColor() {
    var el = document.querySelector("p"); 
    console.log(el.style.backgroundColor);
}
// with very slight blue as the backgroundColor of words "Flowers by Muriel"





/*----------------------------------*/
/*----------------------------------*/
// change the "display" value of the first "a" element to "block"

//?** (HTML)
<!doctype html>
<html>
    <body>  
        <button onclick="changeLayout()">Change Layout</button>
        <h3>Cat Pics</h3>
        <a href="https://mimo.app/i/clawdius.png">Cat 1</a>
        <a href="https://mimo.app/i/cat.png">Cat 2</a>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function changeLayout() {
    var el = document.querySelector("a"); 
    el.style.display = "block"; //!
}
// two cat photo links, side by side, so in one "BLOCK"
// and if click on "Change Layout" button, the two links will be on on the top of the other, overlapped





/*----------------------------------*/
/*----------------------------------*/
// add the correct PROPERTITES to change the "background-color" and "border-radius" styles

//?** (HTML)
<!doctype html>
<html>
    <body>  
        <button onclick="changeStyles()">Change Styles</button>
        <p>Spygame III - Coming January</p>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function changeStyles() {
    var el = document.querySelector("p"); 
    el.style.backgroundColor = "aliceBlue";
    el.style.borderRadius = "45px";
}
// when clicked on the button, very slight blue as the backgroundColor of words "Spygame III - Coming January"





/*----------------------------------*/
/*----------------------------------*/
//! VERY HARD
// changing the style with JavaScript works no matter if the previous style was set inline or through a stylesheet
// so, NOT MATTER WHERE THE STYLE WAS SET

//?** (HTML)
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <button onclick="changeStyle()">Update Profile Design</button>
        <br>
        <img src="https://mimo.app/i/hacker.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (CSS)
img {
    background-color: aliceBlue;
    border-radius: 10px;
    border: 2px solid lightGray;
}
button, img, p {
    margin: 10px 0 0 0;
}

//?** (JavaScript)
function changeStyle() {
    var el = document.querySelector("img");
    el.style.border = "5px solid lightGray"; //! 
}
// output: a button "Update Profile Design" + photo of hacker
// the 4 corners of the photo are a bit rounded (borderRadius)
