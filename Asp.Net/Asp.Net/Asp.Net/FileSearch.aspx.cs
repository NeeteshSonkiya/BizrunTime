using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.Net
{
    public partial class FileSearch : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btn_Click(object sender, System.EventArgs e)
        {
            string search = TextBox1.Text;
            string[] files = Directory.GetFiles(@"F:\Bizruntime\Workspace\Asp.net\Asp.Net\Asp.Net\MyUpload\", "*.*", SearchOption.AllDirectories);
            int Flag = 0;
            string dir = @"F:\Bizruntime\Workspace\Asp.net\Asp.Net\Asp.Net\MyUpload\";
            string[] files1;
            int numFiles;
            files1 = Directory.GetFiles(dir);
            numFiles = files.Length;
            Response.Write("Files searched : " + numFiles + "<br>");
            for (int i = 0; i < numFiles; i++)
            {


                string file = files[i].ToString();

                int file1 = file.IndexOf(search, StringComparison.CurrentCultureIgnoreCase);
                if (file1 != -1)
                {
                    Response.Write("<br>" + file);
                    Flag = 1;
                }

            }
        }
    }
}