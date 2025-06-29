<%  
' Retrieve data from the Request object  
Dim userName, userEmail, userMessage  
' variables are declared
userName = Request.Form("name")  
userEmail = Request.Form("email")  
userMessage = Request.Form("message")  

' Output the received data  

Response.Write("<h1>Form Data Received</h1>")  
Response.Write("<p>Name: " & Server.HTMLEncode(userName) & "</p>")  
' Response.Write("<p>Email: " & Server.HTMLEncode(userEmail) & "</p>")  
' Response.Write("<p>Message: " & Server.HTMLEncode(userMessage) & "</p>")  

' response.write(request.querystring("fname"))
' response.write(" " & request.querystring("lname"))

response.write(request.form("fname"))
response.write(" " & request.form("lname"))
%>