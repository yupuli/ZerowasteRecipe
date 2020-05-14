var rid;
function oneValue() {
    var url = window.location.search;
    if (url.indexOf("?") != -1) {
        rid = url.substr(url.indexOf("=") + 1);
    }
}


function getInformation() {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/" + rid + "/information?includeNutrition=false&apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (res) {
            
            document.getElementById("imgs").innerHTML = "<img src='" + res.image + "'alt='Awesome Image' /><br>";
            document.getElementById("summary").innerHTML = "<p> " + res.summary+"</p >";              
            document.getElementById("name").innerHTML = "<h3>"+res.title+"</h3>";
        }
    });
}
function getIngredient() {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/" + rid + "/ingredientWidget.json?apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (resu) {

            var ing = ""
            resu.ingredients.forEach(function (e) {

                ing = ing + "<li>"
                    + e.amount.metric.value + e.amount.metric.unit + " "+ e.name  +"</li>";
            });
            document.getElementById("ingredient").innerHTML = "<p> " + ing + "</p><br>";
        }
    });
}
function getNutrition() {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/" + rid + "/nutritionWidget.json?apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (res) {
            document.getElementById("carbohydrate").innerHTML =  res.crbs ;
            document.getElementById("protien").innerHTML =  res.protein;
            document.getElementById("fat").innerHTML = res.fat ;
            document.getElementById("calories").innerHTML =   res.calories ;
        }
    });
}
function getStep() {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/" + rid + "/analyzedInstructions?apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (results) {
            var cookSteps = ""

            results.forEach(function (e) {
                var i = 1
                e.steps.forEach(function (s) {
                    cookSteps = cookSteps + "<ul><li><div class='count - box'><span>" + i + "</span></div><div class='text - box'><p>" + s.step+"</p></div></li></ul>"                    
                    i++
                });
            });
            document.getElementById("steps").innerHTML = cookSteps + "<br><br><br>";
        }
    });
}
window.onload = function () {
    oneValue();
    getInformation();
    getIngredient();
    getNutrition();
    getStep();
}