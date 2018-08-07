<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LoginForm.aspx.cs" Inherits="LoginForm.LoginForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Login</title>
    <h1 style="text-align:center;">Login Form</h1>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table align="center">
            <tr>
                <td class="auto-style1"> User Name: </td>
                <td> <asp:TextBox ID="txtName" runat="server" Width="150px"></asp:TextBox></td>
            </tr>
            <tr>
                <td class="auto-style1">Password:</td>
                <td> <asp:TextBox ID="txtPw" runat="server" TextMode="Password" Width="150px"></asp:TextBox></td>
            </tr>
            <tr>
                <td align="right" class="auto-style1"><asp:Button ID="btn1" runat="server" Text="LogIn" OnClick="btn1_Click"/></td>
                <td><asp:Button ID="btn2" runat="server" Text="Reset" OnClick="btn2_Click" /></td>
            </tr>
       
            </table>
        </div>
    </form>
</body>
</html>
