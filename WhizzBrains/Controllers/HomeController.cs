using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WhizzBrains.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Overview()
        {
            return View();
        }
        public ActionResult Team()
        {
            return View();
        }
        public ActionResult Contact()
        {
            return View();
        }
        public ActionResult Widgets()
        {
            return View();
        }
    }
}