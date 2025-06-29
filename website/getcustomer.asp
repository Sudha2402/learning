    <%
    Dim conn, rs
    Set conn = Server.CreateObject("ADODB.Connection")
    Set rs = Server.CreateObject("ADODB.Recordset")
    conn.Open "DRIVER={Microsoft Access Driver (*.mdb)};DBQ=C:\inetpub\customer.mdb"
    rs.Open "SELECT * FROM customers WHERE name = '" & Request.QueryString("q") &"'", conn, 1, 3
    Response.Write rs("name") & " " & rs("address") & " " &
    rs("phone")
    rs.Close
    conn.Close
    %>