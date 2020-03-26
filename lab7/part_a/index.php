<?php
// You can define any config variable here

//Display error message casue by your PHP scripts
error_reporting(E_ALL | E_STRICT);
ini_set('display_errors',1);

//The require or include staement takes all the text/code/markup that exsits
//in the specified file and copies it into the file that uses the include (or require) staement.
require 'application/mvc.php';
?>