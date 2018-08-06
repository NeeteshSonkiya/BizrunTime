<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FileUpload.aspx.cs" Inherits="Asp.Net.FileUpload" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <p>Browse to Upload File</p>
            <asp:fileupload id="FileUp" runat="server"/>
        </div>
        <p>
            <asp:Button ID="Btn" runat="server" Text="Upload File" OnClick="Btn_Click"/>
        </p>
    </form>
    <p>
        <asp:Label runat="server" id="FileUploadStatus"></asp:Label>
    </p>
</body>
</html>
