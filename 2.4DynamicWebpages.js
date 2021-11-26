// 2021.11.26 FROM (MM) 
/*----------------------------------*/
DYNAMIC WEBPAGES (exos)
// to NEST new elements
// .appendChild()


/*----------------------------------*/
/*----------------------------------*/
.appendChild() => it adds the element between parentheses inside theo parent element
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
/*----------------------------------*/
// why can't we nest a new element with JavaScript without setting the ID of the parent element? 
// => because we need to access the parent in the script when adding the new element

// what does "document.getElementById()" do? 
// => to access an element by its ID

// when do we use the ".appendChild()" instruction?
// => when we want to add a child element inside a parent element

// why do we set the parent element ID before nesting an element? 
// => because we'll access the parent element multiple times in the "script"









