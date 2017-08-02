<?php 
	
 /*
   * Collect all Details from Angular HTTP Request.
   */ 
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$string = $request->string;
    echo $string; //this will go back under "data" of angular call.
    /*
     * You can use $email and $pass for further work. Such as Database calls.
    */  

    //remove all spaces
    
    $string = str_replace(' ', '', $string);

    //remove special characters
    $string = preg_replace('/[^A-Za-z0-9\-]/', '', $string);

    //change case to lower
    $string = strtolower($string);

    //reverse the string
    $reverse = strrev($string);

    if ($string == $reverse) {
       echo ": It is Palindrome.";
    } 
    else {
        echo ": Not Palindrome.";
    }


?>