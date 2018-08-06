<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FileSearch.aspx.cs" Inherits="Asp.Net.FileSearch" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        </div>
        <asp:Button ID="btn" runat="server" Text="Button" OnClick="btn_Click"/>
    </form>
</body>
</html>
