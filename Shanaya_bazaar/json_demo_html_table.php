<?php  
// Sample JSON data (in a real scenario, this could come from a database or an API)  
$json_data = '[  
    {"id": 1, "name": "John Doe", "email": "john@example.com"},  
    {"id": 2, "name": "Jane Smith", "email": "jane@example.com"},  
    {"id": 3, "name": "Sam Wilson", "email": "sam@example.com"}  
]';  

// Decode JSON data into an associative array  
$data = json_decode($json_data, true);  

?>  


<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>JSON Data to HTML Table</title>  
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">  
</head>  
<body>  
<div class="container mt-5">  
    <h2 class="mb-4">JSON Data to HTML Table</h2>  
    <table class="table table-bordered">  
        <thead>  
            <tr>  
                <th>ID</th>  
                <th>Name</th>  
                <th>Email</th>  
            </tr>  
        </thead>  
        <tbody>  
            <?php foreach ($data as $row): ?>  
                <tr>  
                    <td><?php echo htmlspecialchars($row['id']); ?></td>  
                    <td><?php echo htmlspecialchars($row['name']); ?></td>  
                    <td><?php echo htmlspecialchars($row['email']); ?></td>  
                </tr>  
            <?php endforeach; ?>  
        </tbody>  
    </table>  
</div>  
</body>  
</html>







<!-- 
This PHP script takes a JSON string, decodes it into an associative array, and generates an HTML table displaying the ID, Name, and Email of each entry. Remember to tailor the json_data variable and the HTML structure as needed for your particular application! -->