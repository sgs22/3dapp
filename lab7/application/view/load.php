<?php
class Load {

    //Defaults to contructor as no speciifc cotnrusctor is defined
    function view($file_name, $data = null) {
        // Check for data
        if( is_array($data) ) {
            extract($data);
        }

        // Cincatmate the view file with .php extension to incluce the view as a php file
        include $file_name, '.php';
    }
}
?>