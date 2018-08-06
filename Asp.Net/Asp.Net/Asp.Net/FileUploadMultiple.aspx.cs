using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.Net
{
    public partial class FileUploadMultiple : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Btn_Click(object sender, EventArgs e)
        {
            if ((FileUpload.PostedFile != null) && (FileUpload.PostedFile.ContentLength > 0))
            {
                var count = 0;
                foreach (HttpPostedFile uploadedFile in FileUpload.PostedFiles)
                {
                    string fn = System.IO.Path.GetFileName(uploadedFile.FileName);
                    string SaveLocation = Server.MapPath("~/MyUpload/") + "\\" + fn;
                    try
                    {
                        uploadedFile.SaveAs(SaveLocation);
                        count++;
                    }
                    catch(Exception ex)
                    {
                        FileUploadStatus.Text = "Error:" + ex.Message;
                    }
                }
                if (count > 0)
                {
                    FileUploadStatus.Text = "File Uploaded Successfully";
                }
            }
            else
            {
                FileUploadStatus.Text = "Choose Your File ";
            }
        }
    }
}