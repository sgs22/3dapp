// JavaScript Gallery Generator
// Create the XMLHttpRequest Object for communicating with the web server
var xmlHttp = new XMLHttpRequest();
// Stores number of horizontalColumns gallery has, if too large it wont fit in browser window
var numberOfColumns = 4;
// Stores newly generated gallery HTML code
var htmlCode = "";
//Temporarily stores server response while code is generated
var response;

$(document).ready(function() {
    // Set up the path to the PHP function that reads the image direcotry to find the thumbnail file names
    var send = "scripts\hook.php";
    // Open ther connection to the web server
    xmlHttp.open("GET", send, true);
    // Tell the server that the client has no outgoing message, i.e. we are sending nothing to the server
    xmlHttp.send(null);
    // Check we get a valid server response
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4) {
            // Response handler code
        }
    }
});