// 2021.10.31 FROM (MIMO) 
/*----------------------------------*/
// TOGGLING CSS CLASSES
// setAttribute() overrides the element's classes 
// classList does not do so


/*----------------------------------*/
/*----------------------------------*/ (1)
//! setAttribute()
// if we use it to change a CLASS, it OVERRIDES the previous CLASS
// in (2), will see the better way to add and remove CLASSES, with the PROPERTY //! classList

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <button onclick="turnBold()">Turn Bold</button>
        <button onclick="turnItalic()">Turn Italic</button>
        <br>
        <p class="italic">It was a bright cold day in April, and the clocks were striking thirteen.</p>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------
body {
    text-align: center;
}
button {
    margin: 30px;
    padding: 3px 12px;
    border-radius: 20px;
    font-weight: bold;
    border: 0px solid;
    outline: none;
    background-color: #D9E8F8;
    color: #4D4D87
}
.italic {
    font-style: italic;
}
.bold {
    font-weight: bold;
}

//?? (JavaScript)------------------
function turnBold() {
    var el = document.querySelector("p");
    el.setAttribute("class", "bold"); 
}
function turnItalic() {
    var el = document.querySelector("p");
    el.setAttribute("class", "italic"); 
}





/*----------------------------------*/
/*----------------------------------*/ (2)
//! .classList.add()
// to add a new CLASS without overriding the previous one, we add first "classList" PROPERTY
// then use it to ACCESS the add() METHOD

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <button onclick="addBold()">Bold</button>
        <br>
        <p class="italic">It was a bright cold day in April, and the clocks were striking thirteen.</p>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------
.italic {
    font-style: italic;
}
.bold {
    font-weight: bold;
}
body {
    text-align: center;
}
button {
    margin: 30px;
    padding: 3px 12px;
    border-radius: 20px;
    font-weight: bold;
    background-color: #D9E8F8;
    color: #4D4D87;
}

//?? (JavaScript)------------------
function addBold() {
    var el = document.querySelector("p");
    el.classList.add();
}





/*----------------------------------*/
/*----------------------------------*/ (3)
//! .classList.add()
// inside the add() METHOD we code the CLASS we want to add to the element
// code "bold" to add the CLASS once we CALL the FUNCTION

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <button onclick="addBold()">Bold</button> //!
        <br>
        <p class="italic">It was a bright cold day in April, and the clocks were striking thirteen.</p>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------
(IDEM)

//?? (JavaScript)------------------
function addBold() { //!
    var el = document.querySelector("p");
    el.classList.add("bold"); //!
}





/*----------------------------------*/
/*----------------------------------*/ (4)
//! .classList.remove()
// CLASSES can be REMOVED from an element as well
// to remove a CLASS, code the remove() METHOD

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <button onclick="removeBold()">Bold</button> //!
        <br>
        <p class="italic">It was a bright cold day in April, and the clocks were striking thirteen.</p>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------
(IDEM)

//?? (JavaScript)------------------
function removeBold() { //!
    var el = document.querySelector("p");
    el.classList.remove("bold"); //! 
}





/*----------------------------------*/
/*----------------------------------*/ (5)
//! .classList.toggle()
// if want to automaticallys ADD or REMOVE a CLASS when CALL the FUNCTION
// use toggle() METHOD

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <button onclick="toggleBold()">Bold</button> //!
        <br>
        <p class="italic">It was a bright cold day in April, and the clocks were striking thirteen.</p>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------
(IDEM)

//?? (JavaScript)------------------
function toggleBold() { //!
    var el = document.querySelector("p");
    el.classList.toggle("bold"); //! 
}






/*----------------------------------*/
/*----------------------------------*/ (6)
//! ADD some new CLASSES   or
//! REMOVE some new CLASSES
// if want to automaticallys ADD or REMOVE a CLASS when CALL the FUNCTION
// use toggle() METHOD

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <button onclick="addClasses()">Style1</button> //!
        <br>
        <p class="bold italic">It was a bright cold day in April, and the clocks were striking thirteen.</p>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------
.italic {
    font-style: italic;
}
.bold {
    font-weight: bold;
}
.highlight {
    background-color: yellow;
}
.underline {
    text-decoration: underline;
}
body {
    text-align: center;
}
button {
    margin: 30px;
    padding: 3px 12px;
    border-radius: 20px;
    font-weight: bold;
    background-color: #D9E8F8;
    color: #4D4D87;
}

//?? (JavaScript)------------------
function addClasses() { //!
    var el = document.querySelector("p");
    el.classList.add("highight", "underine"); //! 
}
