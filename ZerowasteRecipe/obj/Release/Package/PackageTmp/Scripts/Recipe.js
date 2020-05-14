var rid = 0;
function getrecipe(q) {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/search?query=" + q + "&apiKey=a16063f4fe2b4f5b952d4a348d15892e",
        success: function (res) {

            var j = 6;
            var a = "";
            for (i = 0; i < j; i++) {
                rid = res.results[i].id
                a = a + "<p>" + res.results[i].title + "</p><br><a href='Showrecipe?value=" + rid + "'><img src='" + res.baseUri + res.results[i].image + "' width='400' /></a><br><br>"
            }
            document.getElementById("output").innerHTML = a;

        }
    });
}