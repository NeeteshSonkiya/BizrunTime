<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RadioButton.aspx.cs" Inherits="Asp.Net.RadioButton" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:RadioButton ID="M" runat="server" Text="Male" GroupName="gender"/>
            <asp:RadioButton ID="F" runat="server" Text="Female" GroupName="gender"/>
        </div>
        <p>
            <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click" style="width: 61px" />
        </p>
    </form>
    <asp:Label runat="server" id="genderId"></asp:Label>
</body>
</html>
