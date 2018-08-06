using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Asp.Net
{
    public partial class Calender : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Calender1_SelectionChanged(object sender, EventArgs e)
        {
            ShowDate.Text = "You Selected: " + Calendar1.SelectedDate.ToString("D");
        }
    }
}