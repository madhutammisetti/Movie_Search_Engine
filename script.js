
var inputValue= $('#searchInput')[0];

var movieWrapper = $("#movieWrapper");

$('#btn').click(function(){
 console.log(inputValue.value)
 movieWrapper.html("")    // to remove the previous image ..
 $('#errorSection').text("")
 $('#loader').text("Loading Dude ....")
 $('#loader').css("text-align" , "center")
 $.get("https://omdbapi.com/?apikey=c951ff1&s="+inputValue.value ,function(response){
    console.log(response);

    if(response.Response === "True"){
    var movies = response.Search
    for(let i=0;i<movies.length;i++){
        console.log(movies[i]);
        $('#loader').text("");
var moviecard = $('<div>');
moviecard.addClass("card")

var movieposter = $('<img>');
movieposter.attr("src",movies[i].Poster)
movieposter.addClass("productimg");

var movieTitle =$('<h2>');
movieTitle.text(movies[i].Title)
movieTitle.addClass("productDetails")


var movieType = $('<p>');
movieType.text(movies[i].Type)
movieType.addClass("productDetails")

var movieYear = $('<p>');
movieYear.text(movies[i].Year)
movieYear.addClass("productDetails")

moviecard.append(movieposter,movieTitle,movieType,movieYear);



movieWrapper.append(moviecard);


}
 }else{

    $('#loader').text("");
$('#errorSection').text("Error 404 , Movie Not Found , Enter Correct Movie name Dude , Or else check Spell")
$('#errorSection').css("text-align" , "center")
 }

 })
})