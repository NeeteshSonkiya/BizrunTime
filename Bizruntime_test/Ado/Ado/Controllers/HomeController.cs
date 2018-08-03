using Ado.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ado.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        database_Access_Layer.db dblayer = new database_Access_Layer.db();

       


        public JsonResult GetRecord(string prefix)

        {

            DataSet ds = dblayer.GetName(prefix);

            List<search> searchlist = new List<search>();

            foreach (DataRow dr in ds.Tables[0].Rows)

            {

                searchlist.Add(new search
                {

                    Name = dr["Name"].ToString(),

                    Sr_no = dr["Sr_no"].ToString()

                });

            }

            return Json(searchlist, JsonRequestBehavior.AllowGet);

        }
    }
}