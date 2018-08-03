<script runat="server">

    Protected Sub btnDelete_Click(sender As Object, e As EventArgs)

    End Sub
</script>

@using (Html.BeginForm("Index", "Home", FormMethod.Post, new { enctype = "multipart/form-data" }))
{ 
@Html.ValidationSummary();
<div>
    <input type="file" id="myFileUpload" name="myFileUpload">
</div>
<div>
    <input type="submit" id="btnSubmit" value="Upload">
</div>
}

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>how to delete a file from a folder in ASP.Net using C#</title>
    <style type="text/css">
        .auto-style1 {
            width: 88px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td>Select file to delete</td>
                    <td class="auto-style1">
                        <asp:DropDownList ID="DropDownList1" runat="server" Height="16px" Width="88px">
                            <asp:ListItem>Select file</asp:ListItem>
                            <asp:ListItem>file1.txt</asp:ListItem>
                            <asp:ListItem>file2.pdf</asp:ListItem>
                            <asp:ListItem>file3.doc</asp:ListItem>
                            <asp:ListItem></asp:ListItem>
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td class="auto-style1">
                        <asp:Button ID="btnDelete" runat="server" Text="Delete" OnClick="btnDelete_Click" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Label ID="lbl_output" runat="server" /></td>
                </tr>
            </table>
        </div>
    </form>

</body>
</html>
