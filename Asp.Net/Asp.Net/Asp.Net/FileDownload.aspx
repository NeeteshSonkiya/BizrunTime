<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FileDownload.aspx.cs" Inherits="Asp.Net.FileDownload" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
       <div>
            <p>Click the button to Download</p>
            <asp:Button ID="btn" runat="server" OnClick="btn_Click" Text="Download"/>
            <br />
            <br />
            <asp:Label ID="Label1" runat="server" ></asp:Label>
        </div>
    </form>
</body>
</html>
