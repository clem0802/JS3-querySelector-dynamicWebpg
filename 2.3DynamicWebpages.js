// 2021.11.26 FROM (MM) 
/*----------------------------------*/
DYNAMIC WEBPAGES (exos)
// to CREATE new elements
// document.createElement();


/*----------------------------------*/
/*----------------------------------*/
=> document.createElement(); => this creates a new element

<!doctype html>
<html>
    <body>
        <script>
            document.createElement("p");
            document.createElement("h2");
        </script>
    </body>
</html>
// 2 elements are created by <script></script>


/*----------------------------------*/
/*----------------------------------*/
<!doctype html>
<html>
    <body>
        <script>
            var title = document.createElement("h1");
            title.innerHTML;
        </script>
    </body>
</html>
// title.innerHTML can access the content of the element stored in "title"
// in short, title.innerHTML accesses the "h1" CONTENT


/*----------------------------------*/
/*----------------------------------*/
// inside the "script", create a VARIABLE named "heading"
// such that to store the created "h2" element
<!doctype html>
<html>
    <body>
        <script>
            document.createElement("h2");
            var paragraph = document.createElement("p");
            var heading = document.createElement("h2"); //!
        </script>
    </body>
</html>


/*----------------------------------*/
/*----------------------------------*/
// when "script" code runs, it creates a "newElement" variable sotring a "ul" element
<!doctype html>
<html>
    <body>
        <script>
            newElement = document.createElement("ul");
        </script>
    </body>
</html>
