var playerList = ["ESL_SC2","cozzaro","OgamingSC2","freecodecamp"];
var logo;
var status;
var name;
$(document).ready(function(){

  for(var i=0; i<playerList.length; i++){
    var url = "https://wind-bow.gomix.me/twitch-api/streams/"+ playerList[i];
    var url2 = "https://wind-bow.gomix.me/twitch-api/channels/"+ playerList[i];
    $.getJSON(url,function(data){
      if(data.stream === null){
        $.getJSON(url2, function(data2){
          var logo2=data2.logo;
          var status2="OFFLINE";
          var name2=data2.display_name;
          $("#followerInfo").prepend("<div class = 'row'>"+ "<div class='col-md-4'>"+
          "<img src='" + logo2 +"'>"
          +
          "</div>" + "<div class='col-md-4'>" + name2 + "</div>" + "<div class='col-md-4'>" + status2 + "</div></div>");
        });

      }
      else{
        logo=data.stream.channel.logo;
        status=data.stream.channel.status;
        name=data.stream.channel.display_name;
        $("#followerInfo").prepend("<div class = 'row'>"+ "<div class='col-md-4'>"+
        "<img src='" + logo +"'>"
        +
        "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      }

    });
  };

})
