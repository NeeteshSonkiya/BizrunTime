using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AspCore1.Controllers
{
    [Route("demo")]
    public class DemoController : Controller
    {
        [Route("")]
        [Route("index")]
        [Route("~/")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("demo2")]
        public IActionResult Demo2()
        {
            return View("demo2");
        }

        [Route("demo3/{id}")]
        public IActionResult Demo3(int id)
        {
            ViewBag.id = id;
            return View("Demo3");
        }

        [Route("demo4/{id1}/{id2}")]
        public IActionResult Demo4(int id1, string id2)
        {
            ViewBag.id1 = id1;
            ViewBag.id2 = id2;
            return View("Demo4");
        }

        [Route("demo5")]
        public IActionResult Demo5([FromQuery (Name = "id")] string id)
        {
            ViewBag.id1 = id;
            return View("Demo5");
        }

        [Route("demo6")]
        public IActionResult Demo6([FromQuery(Name = "id1")] int id1, [FromQuery(Name = "id2")] string id2)
        {
            ViewBag.id1 = id1;
            ViewBag.id2 = id2;
            return View("Demo6");
        }

        [Route("demo7")]
        public IActionResult Demo7()
        {
            var id1 = int.Parse(HttpContext.Request.Query["id1"].ToString());
            var id2 = HttpContext.Request.Query["id2"].ToString();
            ViewBag.id1 = id1;
            ViewBag.id2 = id2;
            return View("Demo7");
        }
    }
}