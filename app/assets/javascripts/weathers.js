$(document).ready(function(){
  $("#accordion").accordion();
  $("form[data-remote]").on("submit", function(event){

    var weatheroptions = {
      type: "get",
      url: "http://bwb.webscript.io/weather?x="+ $("#weather_lat").val()+ "&y="+ $("#weather_long").val(),
      data: $(this).serialize(),

      complete: function(response, status_text){
        var weather = $.parseJSON(response.responseText).currently.summary;
        $("#result").text(weather);
      }//end of complete object
    };//end of weatheroptions

    $.ajax(weatheroptions);

    event.preventDefault();
  });

  $("#number_form").on("submit", function(event){

    var numberoptions = {
      type: "get",
      url: "http://numbersapi.com/"+ $("#number").val(),

      complete: function(response, status_text){
        var funfact = response.responseText;
        $("#result").prepend('<li>'+ funfact + '</li>');
      }//end of complete object
    };//end of numberoptions

    $.ajax(numberoptions);

    event.preventDefault();
  });

  $("#name_joke").on("submit", function(event){

    var nameoptions = {
      type: "get",
      url: "http://api.icndb.com/jokes/random/?firstName="+ $("#first_name").val()+ "&lastName=" + $("#last_name").val(),

      complete: function(response, status_text){
        console.log($.parseJSON(response.responseText).value.joke);
        var joke = $.parseJSON(response.responseText).value.joke;
        $("#result").prepend('<li>'+ joke + '</li>');
      }//end of complete object
    };//end of nameoptions

    $.ajax(nameoptions);

    event.preventDefault();
  });
});