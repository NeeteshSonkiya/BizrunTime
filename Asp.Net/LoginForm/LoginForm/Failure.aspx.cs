using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LoginForm
{
    public partial class Failure : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //string Name = ((TextBox)PreviousPage.FindControl("txtName")).Text;
            string Name = Request.QueryString["Name"];
            Response.Write("Hello " + Name + ", You are not registered");
        }
    }
}