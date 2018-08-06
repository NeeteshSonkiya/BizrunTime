using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.Net
{
    public partial class FileDownload : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btn_Click(object sender, EventArgs e)
        {
            string filePath = @"E:\CLASS\SQL\DAY-7.txt";
            FileInfo file = new FileInfo(filePath);
            if (file.Exists)
            {
                file.Delete();
                Label1.Text = "File Delete Successfully";
            }
            else
            {
                Label1.Text = "file is not available ";
            }
        }
    }
}