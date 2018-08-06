<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FileUploadMultiple.aspx.cs" Inherits="Asp.Net.FileUploadMultiple" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <p>Browse to upload</p>
            <asp:FileUpload ID="FileUpload" runat="server"  AllowMultiple="true"/>
        </div>
        <p>
            <asp:Button ID="Btn" runat="server" Text="Upload File" OnClick="Btn_Click"/>
        </p>
    </form>
    <p>
        <asp:Label ID="FileUploadStatus" runat="server"></asp:Label>
    </p>
</body>
</html>
