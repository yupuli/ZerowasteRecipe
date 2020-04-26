using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ZerowasteRecipe.Controllers
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
           

            return View();
        }
        public ActionResult Locations()
        {
            ViewBag.Message = "Your can zoom in or out to find collection points";
            return View();
        }
        public ActionResult Recipe()
        {
            ViewBag.Message = "Food Reicpe Search page.";
            return View();
        }
        public ActionResult Showrecipe()
        {

            return View();
        }
    }
}