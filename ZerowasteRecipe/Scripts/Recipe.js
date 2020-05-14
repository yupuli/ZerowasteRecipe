var rid = 0;
function getrecipe(q) {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/search?query=" + q + "&apiKey=a16063f4fe2b4f5b952d4a348d15892e",
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
                document.getElementById(c).innerHTML = "<a href='Showrecipe?value="+rid+"'><img id='searchimage' src='" + res.baseUri + res.results[i].image + "' /></a>";               
            }
            

        }
    });
}
function getARecipe(n,m) {   
    $.ajax({
        url: "https://api.spoonacular.com/recipes/"+n+"/information?includeNutrition=false&apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (results) {
            document.getElementById("fixed_title" + m).innerHTML = results.title;
            document.getElementById("fixed_images" + m).innerHTML = "<a href='Showrecipe?value="+ n +"'><img src='"  + results.image + "'/></a>";

        }
    });
}
window.onload = function () {
    getARecipe("94640", "1");
    //getARecipe("399238", "2");
}