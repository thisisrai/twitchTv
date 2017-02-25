let playerList = ["ESL_SC2","cozzaro","OgamingSC2", "freecodecamp"];
let i = 0;
$(document).ready(function(){

  while(i<4){
    let url = "https://wind-bow.gomix.me/twitch-api/streams/"+ playerList[i];
    let url2 = "https://wind-bow.gomix.me/twitch-api/channels/"+ playerList[i];
    $.getJSON(url,function(data){
      if(data.stream === null){
        $.getJSON(url2, function(data2){
          let logo2=data2.logo;
          let status2="OFFLINE";
          let name2=data2.display_name;
          let urltoStream2=data2.url;
          $("#followerInfo").prepend("<div class = 'row'>"+ "<div class='col-md-4'>"+
          "<img src='" + logo2 +"'>"
          +
          "</div>" + "<div class='col-md-4'>" +"<a target='blank' href='"+urltoStream2+"'>"+ name2+ "</a>"+ "</div>" + "<div class='col-md-4'>" + status2 + "</div></div>");
        });

      }
      else{
        let logo=data.stream.channel.logo;

        let status=data.stream.channel.status;
        let name=data.stream.channel.display_name;
        let urltoStream=data.stream.channel.url;
        $("#followerInfo").prepend("<div class = 'row'>"+ "<div class='col-md-4'>"+
        "<img src='" + logo +"'>"
        +
        "</div>" + "<div class='col-md-4'>" +"<a target='blank' href='"+urltoStream+"'>"+ name+ "</a>"+ "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      }

    });
    i++;
  };

})
