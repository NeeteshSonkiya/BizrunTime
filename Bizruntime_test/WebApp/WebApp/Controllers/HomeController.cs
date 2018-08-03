using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp.Controllers
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
        [HttpPost]
        public ActionResult Index(HttpPostedFileBase myFileUpload)
        {
            //---- Check if control has file or not
            if (myFileUpload == null)
            {
                ModelState.AddModelError("file", "Please select file to upload.");
            }
            else
            {
                var pathToSave = Server.MapPath("~/MyUploads/") + myFileUpload.FileName;
                myFileUpload.SaveAs(pathToSave);
                ModelState.AddModelError("file", "File Successfully saved");
            }
            return View();
        }

    }
}