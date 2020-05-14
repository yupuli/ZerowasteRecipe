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
            //document.getElementById("ingredient").innerHTML = "<p>" + res.title + "</p><br>";
            document.getElementById("imgs").innerHTML = "<img id='images' src='" + res.image + "' /><br>"
            document.getElementById("servings").innerHTML = "<p>" + res.servings + "</p>"
            document.getElementById("totalTime").innerHTML = "<p> " + res.readyInMinutes + " minutes </p>"
            //document.getElementById("summary").innerHTML = res.summary;
            document.getElementById("title").innerHTML = "<p>Recipe:" + res.title + "</p><br>";
        }
    });
}
function getIngredient() {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/" + rid + "/ingredientWidget.json?apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (resu) {

            var ing = ""
            resu.ingredients.forEach(function (e) {

                ing = ing + e.name + " " + e.amount.metric.value + " " + e.amount.metric.unit + ", "

            });

            document.getElementById("ingredient").innerHTML = "<p> " + ing + "</p><br>";
        }
    });
}
function getNutrition() {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/" + rid + "/nutritionWidget.json?apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (res) {
            document.getElementById("carbohydrate").innerHTML = "<p>Carbohydrate:" + res.crbs + "</p>";
            document.getElementById("protien").innerHTML = "<p>Protien:" + res.protein + "</p>";
            document.getElementById("fat").innerHTML = "<p>Fat:" + res.fat + "</p>";
            document.getElementById("calories").innerHTML = "<p>Calories:" + res.calories + "</p>";
        }
    });
}
function getStep() {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/" + rid + "/analyzedInstructions?apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (results) {
            var cookSteps = "<h1>Cooking steps: </h1><br>"

            results.forEach(function (e) {
                var i = 1
                e.steps.forEach(function (s) {
                    cookSteps = cookSteps + "<p>Step " + i + ":" + s.step + "</p>"
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