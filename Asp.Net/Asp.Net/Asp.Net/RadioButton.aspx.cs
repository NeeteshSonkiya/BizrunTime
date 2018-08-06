using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.Net
{
    public partial class RadioButton : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            genderId.Text = "";
            if (M.Checked)
            {
                genderId.Text = "Your gender is " + M.Text;
            }
            else
            {
                genderId.Text = "Your gender is " + F.Text;
            }
        }
    }
}