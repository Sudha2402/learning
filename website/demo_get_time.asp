<%  
' Get the current date and time  
Dim currentDate  
currentDate = Now()  

' Format the date and time  
Dim formattedDate  
formattedDate = FormatDateTime(currentDate, vbLongTime) & " " & FormatDateTime(currentDate, vbLongDate)  

' Output the message  
Response.Write("This content was requested using the GET method. Requested at: " & formattedDate)  

%>