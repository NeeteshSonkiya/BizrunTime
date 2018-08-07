using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LoginForm
{
    public partial class LoginForm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
                txtName.Focus();
        }

        protected void btn1_Click(object sender, EventArgs e)
        {
            if(txtName.Text == "admin" && txtPw.Text == "admin123")
            {
                Server.Transfer("Success.aspx");
            }
            else
            {
                Response.Redirect("Failure.aspx?Name="+txtName.Text);
            }
        }

        protected void btn2_Click(object sender, EventArgs e)
        {
            txtName.Text = txtPw.Text = "";
            txtName.Focus();
        }
    }
}