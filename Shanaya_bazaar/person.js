
//External scripts cannot contain <script> tags.

// It separates HTML and code
// It makes HTML and JavaScript easier to read and maintain
// Cached JavaScript files can speed up page loads
// To add several script files to one page  - use several script tags:


// An external script can be referenced in 3 different ways:

// With a full URL (a full web address)
// With a relative URL (a path relative to the current document)
//  <script src="http://127.0.0.1:5500/learnjs.html?name=Sudha&age=20#link"></script> 

// With a file path (like /js/)
// <script src="/js/script.js"></script>


// Without any path
// <script src="script.js"></script>




// to get the current URL in JavaScript
//The URL API provides a way to access the current URL of the page.



function getCurrentURL () {
    return window.location.href
  }
  
  // Example
  const url = getCurrentURL()
  
  // url

  console.log("getCurrentURL ()     url : "+url);//http://127.0.0.1:5500/learnjs.html?name=Sudha&age=20#link

//in person.js:37  //Already learnt this method








//In-line individually
export var name = "Sudha";
export var age = 20;


//All at once at the bottom

var name = "Sudha";
// this name can be stored using cookies also

var age = 20;
var greeting="hello";
var messages = () => {
    var name = "Sudha";
    // this name can be stored using cookies also
    var age = 20;
    return name + ' is ' + age + 'years old.';
    };

// export { message, greeting, name };//SyntaxError: Duplicate export of 'name' (at 
export { messages, greeting };










//Export
// Modules with functions or variables can be stored in any external file.
// There are two types of exports: Named Exports and Default Exports.




// Named Exports are used to export multiple values from a module.
// Named Exports are used when you want to export multiple values from a module.
// Named Exports are used when you want to export a specific value from a module.
// Named Exports are used when you want to export a value that is not the default export.

//You can create named exports two ways. In-line individually, or all at once at the bottom.


//In-line individually
// export var name = "Sudha";
// export var age = 20;


//All at once at the bottom
// var name = "Sudha";
// var age = 20;
// export { message, greeting, name };


//a file named personModule.js, and fill it with the things we want to export.





