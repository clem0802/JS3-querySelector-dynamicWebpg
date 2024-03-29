// 2021.11.26 FROM (MM) 
/*----------------------------------*/
DYNAMIC WEBPAGES (exos)
// to NEST new elements
// .appendChild()


/*----------------------------------*/
/*----------------------------------*/ (EXO)
.appendChild() => it ADDs the element between parentheses inside the parent element
// below, ADD the heading inside the body element

<!doctype html>
<html>
    <body id="parent">
        <script>
            var bodyElement = document.getElementById("parent");
            var heading = document.createElement("h1");
            bodyElement.appendChild(heading); //! (add this line)
        </script>
    </body>
</html>


/*----------------------------------*/
/*----------------------------------*/ (EXO)
.appendChild() => it ADDs the element between parentheses inside the parent element
// below, inside the "script", ADD the new "li" element inside the "ol" element

<!doctype html>
<html>
    <body>
        <ol id="list">Bestselling Books</ol>
        <script>
            var list = document.getelementById("list");
            var book = document.createElement("li");
            book.innerHTML = "Sapiens";
            list.appendChild(book); // this code => CORRECT ANSWER
        </script>
    </body>
</html>


/*----------------------------------*/
/*----------------------------------*/
// why can't we nest a new element with JavaScript without setting the ID of the parent element? 
// => because we need to ACCESS the parent in the script when adding the new element

// what does "document.getElementById()" do? 
// => to ACCESS an element by its ID

// when do we use the ".appendChild()" instruction?
// => when we want to ADD a child element inside a parent element

// why do we set the parent element ID before nesting an element? 
// => because we'll ACCESS the parent element multiple times in the "script"


/*----------------------------------*/
/*----------------------------------*/
// create a "parent" variable that STORES the "div" element
<!doctype html>
<html>
    <body>
        <div id="about">
            <ul><strong>Things you didn't know about your goldfish</strong>
                <li>Goldfish can see more colors than humans can</li>
            </ul>
        </div>
        <script>
            var parent = document.getElementById("about"); // (this line is the answer)
        </script>
    </body>
</html>





