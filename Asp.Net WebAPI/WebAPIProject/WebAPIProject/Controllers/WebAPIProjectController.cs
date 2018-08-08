using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace WebAPIProject.Controllers
{
    public class WebAPIProjectController : ApiController
    {
        // GET: WebAPIProject
        public String Get()
        {
            return "Welcome To My World";
        }
    }
}