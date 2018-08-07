using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.Net1
{
    public partial class Validate : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string UserName = Request.Form["txtName"];
            string Password = Request.Form["txtPw"];

            if (UserName == "admin" && Password == "admin123")
            {
                Response.Write("Welcome to Home Page");
            }
            else
            {
                Response.Write("Please enter valid detail");
            }
        }
    }
}