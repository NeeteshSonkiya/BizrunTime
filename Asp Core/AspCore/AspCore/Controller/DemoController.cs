using AspCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AspCore.Controllers
{
    public class DemoController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.age = 20;
            ViewBag.fullName = "John";
            ViewBag.status = true;
            ViewBag.birthday = DateTime.Now;

            Product product = new Product()
            {
                Id = "01",
                Name = "Neetesh",
                Photo = "2.jpg",
                Price = 5.5,
                Quantity = 4
            };
            ViewBag.product = product;

            List<Product> products = new List<Product>() {
            new Product()
            {
                Id = "02",
                Name = "Ansh",
                Photo = "1.jpg",
                Price = 4.5,
                Quantity = 2
            },
            new Product()
            {
                Id = "03",
                Name = "Anshuman",
                Photo = "1.jpg",
                Price = 4.9,
                Quantity = 3
            },
            new Product()
            {
                Id = "04",
                Name = "Aman",
                Photo = "1.jpg",
                Price = 3.9,
                Quantity = 5
            }
            };
            ViewBag.products = products;

            var builder = new ConfigurationBuilder()
                                .SetBasePath(Directory.GetCurrentDirectory())
                                .AddJsonFile("appsettings.json");
            var configuration = builder.Build();
            ViewBag.result1 = configuration["Message"];
            ViewBag.result2 = configuration["MyConfigs:Config1"];
            ViewBag.result3 = configuration["MyConfigs:Config2"];
            ViewBag.result4 = configuration["MyConfigs:Config3"];
            ViewBag.result5 = configuration["Logging:Debug:LogLevel:Default"];

            return View();
        }
        
    }
}
