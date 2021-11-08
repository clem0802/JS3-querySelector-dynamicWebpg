// 2021.10.30 FROM (MM) 
/*----------------------------------*/
// GETTING TAGS and CLASSES


/*----------------------------------*/
/*----------------------------------*/
//! getElementById()  METHOD
//! querySelector()  METHOD

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <li>Momo</li>
            <li>Jonas</li>
            <li>HTH</li>
        </ul>
        <button onclick="displayItem()">Display Item</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItem() {
    var el = document.querySelector("li"); 
    console.log(el.innerHTML);
}





/*----------------------------------*/
/*----------------------------------*/
// but if we want to access more than one element at a time?
// if we want to count items in a list? 
// we can get a COLLECTION of elements of the same TAG TYPE with 
//! getElementByTagName()  METHOD

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <li>Momo</li>
            <li>Jonas</li>
            <li>HTH</li>
        </ul>
        <button onclick="displayItem()">Display Item</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItem() {
    var el = document.getElementsByTagName("li"); //!
    console.log(el);
}
// (output)    [object HTMLCollection]





/*----------------------------------*/
/*----------------------------------*/
//! getElementByTagName()   METHOD
// a COLLECTION of ELEMENTS that have the same TAG
// COLLECTIONS are similar to //! ARRAYS
// they work with indices that start from "0"
// display the first element's HTML content  //!  console.log(el[0].innerHTML);


//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <li>Momo</li>
            <li>Jonas</li>
            <li>HTH</li>
        </ul>
        <button onclick="displayItem()">Display Item</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItem() {
    var el = document.getElementsByTagName("li"); 
    console.log(el[0].innerHTML); //!
}
// the webpage displays the three names
// (output) in console:  //!  Momo






/*----------------------------------*/
/*----------------------------------*/
// just like ARRAYS, we can also access the LENGTH PROPERTY of the COLLECTION

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <li>Momo</li>
            <li>Jonas</li>
            <li>HTH</li>
        </ul>
        <button onclick="displayLength()">Display Length</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayLength() {
    var el = document.getElementsByTagName("li"); 
    console.log(el.length); //!
}
// the webpage displays the three names
// (output) in console: //!  3





/*----------------------------------*/
/*----------------------------------*/
// if want to return a COLLECTIO ?that contains specific elements of a CLASS
// use the  getElementsByClassName()
// press the button to display how many elements of CLASS "urgent" there are

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <li class="urgent">buy milk</li> //!
            <li class="urgent">call grandma</li> //!
            <li>workout</li>
        </ul>
        <button onclick="displayItem()">Display urgent tasks</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItem() {
    var el = document.getElementsByClassName("urgent"); //!
    console.log("You have " + el.length + "urgent tasks"); //!
}
// the webpage displays the three tasks 
// (output) in console: //!  You have 2 urgent tasks





/*----------------------------------*/
/*----------------------------------*/
//! getElementsByClassName() METHOD
// a COLLECTION of elements that have the same CLASS SELECTOR
// the webpage displays the three tasks 
// press the button to display how many elements of CLASS "urgent" there are
// display the FRIST "urgent" task

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <li class="urgent">buy milk</li> 
            <li class="urgent">call grandma</li>
            <li>workout</li>
        </ul>
        <button onclick="displayItem()">Display urgent tasks</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItem() {
    var el = document.getElementsByClassName("urgent"); 
    console.log(el[0].innerHTML); //!
}
// the webpage displays the three tasks 
// (output) in console: //!  buy milk => FIRST "urgent" task





/*----------------------------------*/
/*----------------------------------*/
//! MORE THAN ONE CLASS
// just add the CLASSES with a SPACE IN BETWEEN
// urgent important

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <li class="urgent important">buy milk</li> 
            <li class="urgent important">call grandma</li>
            <li>workout</li>
        </ul>
        <button onclick="displayItem()">Display urgent tasks</button>
        <script src="script.js"></script>
    </body>
</html> 

//?? (JavaScript)
function displayItem() {
    var el = document.getElementsByClassName("urgent important"); 
    console.log(el.length); //!
}
// the webpage displays the three tasks 
// (output) in console: //!  2  (CLASS: urgent important)





/*----------------------------------*/
/*----------------------------------*/
// what does this code do? 
// changes the first heading of CLASS "adventure" //! => Dawn of Justice

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <h3>This week on HomeFlix</h3>
            <h4 class="thriller">The Spy that Knew too Much</h4>
            <h4 class="adventure">Batman Returns</h4>
            <h4 class="adventure">The Dark Knight</h4>
            <button onclick="updateHeadings()">Update Movies</button>
        </ul>
        <script src="script.js"></script>
    </body>
</html> 

//?? (JavaScript)
function updateHeadings() {
    var el = document.getElementsByClassName("adventure"); 
    el[0].innerHTML = "Dawn of Justice"; //!   ATTENTION !!!!
}
// the webpage displays the <h3> and the three <h4>
// the first heading of CLASS "adventure" changed to "Dawn of Justice"





/*----------------------------------*/
/*----------------------------------*/
// code EL.LENGTH to display the number of "h4" headings on the page

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <h3>This week on HomeFlix</h3>
            <h4 class="thriller">The Spy that Knew too Much</h4>
            <h4 class="adventure">Batman Returns</h4>
            <h4 class="adventure">The Dark Knight</h4>
            <button onclick="updateHeadings()">Update Movies</button>
        </ul>
        <script src="script.js"></script>
    </body>
</html> 

//?? (JavaScript)
function updateHeadings() {
    var el = document.getElementsByClassName("h4"); //! A VOIR .....
    console.log(el.length);
}
// the webpage displays the <h3> and the three <h4>
// (output) for el.length of "h4" is //! 3





/*----------------------------------*/
/*----------------------------------*/
// code the correct CLASS to change the last "h4" element

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <h3>This week on HomeFlix</h3>
            <h4 class="thriller">The Spy that Knew too Much</h4>
            <h4 class="adventure gritty">Batman Returns</h4>
            <h4 class="adventure comedy">Guardians</h4>
            <button onclick="updateHeadings()">Update Movies</button>
        </ul>
        <script src="script.js"></script>
    </body>
</html> 

//?? (JavaScript)
function updateHeadings() {
    var el = document.getElementsByClassName("adventure comedy"); 
    el[0].innerHTML = "Dumb and Dumber";
}
// the webpage displays the <h3> and the three <h4>
// when click on the button, "Guardians" changed to "Dumb and Dumber"
