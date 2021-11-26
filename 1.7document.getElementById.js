// 2021.11.26 FROM (MM) 
/*----------------------------------*/
INTERACTING WITH WEBPAGES
// document.getElementById()
// .innerHTML


/*----------------------------------*/
/*----------------------------------*/
.innerHTML
// why do we need the ".innerHTML" instruction? 
// => to retrieve only the text of an element without the tags


/*----------------------------------*/
/*----------------------------------*/
// inside the display statement, assemble the instruction to access the text of the "h1" element
<!doctype html>
<html>
  <body>
     <h1 id="newspaper">
       The Springfield Shopper
     </h1>
     <script>
       console.log(document.getElementById("newspaper").innerHTML); //!
     </script>
  </body>
</html>



/*----------------------------------*/
/*----------------------------------*/
// IMPORTANT  !!!!
document.getElementById()  => this instruction retrieves the ENTIRE element: tags, attributes, and text
document.getElementById().innerHTML  => this instruction retrieves only the text of an element without the tags



/*----------------------------------*/
/*----------------------------------*/
// to UPDATE an element's text
// EX1:
<!doctype html>
<html>
  <body>
     <h1 id="studio">SwimFit</h1>
     <p id="trial">Try the free trial</p>
     <script>
       console.log(document.getElementById("studio").innerHTML = "Dance Studios"); 
       // this changes the h1 text
     </script>
  </body>
</html>

// EX2:
<!doctype html>
<html>
  <body>
     <h2 id="tours">Tokyo Tours</h2>
     <script>
       cdocument.getElementById("tours").innerHTML = "Paris Tours"; 
       // this changes the h2's owner name
     </script>
  </body>
</html>



/*----------------------------------*/
/*----------------------------------*/
// BEAU's PROJECT
<!doctype html>
<html>
  <body>
     <img src="https://mimo.app/r/graphics.png">
     <h2>Beau</h2>
     <p><em>graphic designer, illustrator & photographer</em></p>
       <ul>Starting Prices
         <li id="hour">hour: 35$</li>
         <li>project: 150$</li>
       </ul>
     <script>
         document.getElementById("hour") //to access the first list element
         document.getElementById("hour").innerHTML //to ACCESS the first list element's TEXT
         document.getElementById("hour").innerHTML = "hour:50$"; //to UPDATE the first list element's TEXT
     </script>
  </body>
</html>
