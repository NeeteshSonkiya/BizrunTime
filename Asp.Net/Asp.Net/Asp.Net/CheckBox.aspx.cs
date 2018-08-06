using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.Net
{
    public partial class CheckBox : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ShowCourse.Text = "None";
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            var message = "";
            if(CheckBox1.Checked)
            {
                message = CheckBox1.Text + ",";
            }
            if (CheckBox2.Checked)
            {
                message += CheckBox2.Text + ",";
            }
            if(CheckBox3.Checked)
            {
                message += CheckBox3.Text + ",";
            }
            if(CheckBox4.Checked)
            {
                message += CheckBox4.Text;
            }
            ShowCourse.Text = message;
        }
    }
}