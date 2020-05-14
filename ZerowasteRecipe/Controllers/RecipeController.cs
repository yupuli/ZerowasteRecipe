using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ZerowasteRecipe.Controllers
{
    public class Recipes
    {
        private const String API_KEY = "a16063f4fe2b4f5b952d4a348d15892e";
        public void Search()
        {

        }
    }
    public class RecipeController : Controller
    {
        // GET: Recipe
        public ActionResult Index()
        {
            return View();
        }
    }
}