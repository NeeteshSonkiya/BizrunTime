using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace StateManagement
{
    public partial class ViewState : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            int Count = 0;
            if(ViewState["Counter"] == null)
            {
                Count += 1;
                
            }
            else
                Count = ((int)ViewState["Counter"]) + 1;
                ViewState["Counter"] = Count;
                Response.Write("Page Hit Count : " + Count);
        }
    }
}