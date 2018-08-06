using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.Net
{
    public partial class FileUpload : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Btn_Click(object sender, EventArgs e)
        {
            if ((FileUp.PostedFile != null) && (FileUp.PostedFile.ContentLength > 0))
            {
                string fn = System.IO.Path.GetFileName(FileUp.PostedFile.FileName);
                string SaveLocation = Server.MapPath("MyUpload") + "\\" + fn;
                try
                {
                    FileUp.PostedFile.SaveAs(SaveLocation);
                    FileUploadStatus.Text = "The file has been uploaded ";
                }
                catch(Exception ex)
                {
                    FileUploadStatus.Text = "Error: " + ex.Message;
                }
            }
            else
            {
                FileUploadStatus.Text = "Please select a file to upload ";
            }
        }
    }
}