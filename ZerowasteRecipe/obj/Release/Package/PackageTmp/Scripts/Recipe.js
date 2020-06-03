var rid = 0;
//the function of get recipe by search the keyword of ingredients
function getrecipe(q) {
    var input = q;
    //if the input is null or empty, show random recipes
        $.ajax({
        //use spoonacular food recipe API
        url: "https://api.spoonacular.com/recipes/search?query=" + input + "&apiKey=a16063f4fe2b4f5b952d4a348d15892e",
            success: function (res) {                         
            var j = 5;
            var a = "1";
            var b = "fixed_title";
            var c = "fixed_images";
            for (i = 0; i < j; i++) {              
                rid = res.results[i].id;
                b = b + a;
                c = c + a;
                document.getElementById(b).innerHTML = res.results[i].title;
                document.getElementById(c).innerHTML = "<img src='" + res.baseUri + res.results[i].image + "' alt=''><div class='img-caption'><div class='box-holder'><ul><li><a href='Showrecipe?value=" + rid + "'><i class='icon icon-Goto'></i></a></li></ul></div></div>";
                //document.getElementById(c).innerHTML = "<a href='Showrecipe?value="+rid+"'><img id='searchimage' src='" + res.baseUri + res.results[i].image + "' /></a>";               
            }              
        }
        }).fail(function () {
        //if fail to find a recipe, show the Error page
        window.location('Home/Error');
    });
    

}
/**
 * To show a example food recipe with title and image

function getARecipe(n,m) {   
    $.ajax({
        url: "https://api.spoonacular.com/recipes/" + n + "/information?includeNutrition=false&apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (results) {
            document.getElementById("fixed_title" + m).innerHTML = results.title;
            document.getElementById("fixed_images" + m).innerHTML = "<img src='" + results.image + "' alt=''><div class='img-caption'><div class='box-holder'><ul><li><a href='Showrecipe?value=" + n + "'><i class='icon icon-Goto'></i></a></li></ul></div></div>";

            //document.getElementById("fixed_images" + m).innerHTML = "<a href='Showrecipe?value="+ n +"'><img src='"  + results.image + "'/></a>";
        }
    }).fail(function () {
        window.location('Home/Error');
    });
}
window.onload = function () {
    //getARecipe("94640", "1");
   
}
 *
 */
