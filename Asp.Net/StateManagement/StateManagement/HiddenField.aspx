﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HiddenField.aspx.cs" Inherits="StateManagement.HiddenField" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Button ID="Button1" runat="server" Text="HitCount" OnClick="Button1_Click"/>
            <asp:HiddenField ID="HFCount" runat="server"  Value="0"/>
        </div>
    </form>
</body>
</html>
