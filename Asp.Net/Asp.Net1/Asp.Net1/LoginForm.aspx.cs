using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.Net1
{
    public partial class LoginForm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!this.IsPostBack)
                txtName.Focus();
        }

        protected void btn1_Click(object sender, EventArgs e)
        {
            if (txtName.Text == "admin" && txtPw.Text == "admin123")
            {
                Response.Write("Login Successfully");
            }
            else
            {
                Response.Write("Please enter valid detail");
            }
        }

        protected void btn2_Click(object sender, EventArgs e)
        {
            txtName.Text = txtPw.Text = "";
            txtName.Focus();
        }
    }
}