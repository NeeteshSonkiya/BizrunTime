<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CheckBox.aspx.cs" Inherits="Asp.Net.CheckBox" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <h2>Select Courses</h2>
        <div>
            <asp:CheckBox ID="CheckBox1" runat="server" Text="C"/>
            <asp:CheckBox ID="CheckBox2" runat="server" Text="C++"/>
            <asp:CheckBox ID="CheckBox3" runat="server" Text="JAVA"/>
            <asp:CheckBox ID="CheckBox4" runat="server" Text="J2EE"/>
        </div>
        <p>
            <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click"/>
        </p>
    </form>
    <p>
        Courses Selected: <asp:Label ID="ShowCourse" runat="server"></asp:Label>
    </p>
</body>
</html>
