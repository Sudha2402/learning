<?php
// Get the callback parameter from the URL  
$callback = isset($_GET['callback']) ? $_GET['callback'] : 'myDisplayFunction';

// Create a sample response array  
$responseData = array(
    'status' => 'success',
    'message' => 'Data retrieved successfully.',
    'data' => array(
        'item1' => 'value1',
        'item2' => 'value2'
    )
);

// Encode the array to JSON format  
$jsonData = json_encode($responseData);

// Output the JSONP response  
header('Content-Type: application/javascript');
// as only 'myDisplayFunction' is in $callback
// Callback Parameter: The code retrieves the callback parameter from the URL. If it is not provided, it defaults to myDisplayFunction.
// Response Data: A sample associative array is created to simulate a successful response.
// JSON Encoding: The array is encoded into JSON format using json_encode().

// Setting Content Type: The Content-Type header is set to application/javascript to indicate that the response is JavaScript.

// Output: Finally, the output is constructed in the format <callback function name>(<json data>); to satisfy the JSONP request.
// With this code, when you access demo_jsonp2.php?callback=myDisplayFunction, the output will be a valid JSONP response that calls myDisplayFunction with the JSON data as an argument. 
echo $callback . '(' . $jsonData . ');';// as only 'myDisplayFunction' is in $callback
?>