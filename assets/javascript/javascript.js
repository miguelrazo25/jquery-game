$( document ).ready(function(){
  var Random = Math.floor(Math.random()*101+19)
  $('#rando').text(Random);
  var red = Math.floor(Math.random()*11+1)
  var blue = Math.floor(Math.random()*11+1)
  var yellow = Math.floor(Math.random()*11+1)
  var green = Math.floor(Math.random()*11+1)
  var player = 0; 
  var wins = 0;
  var losses = 0;
$('#wins').text(wins);
$('#losses').text(losses);
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#rando').text(Random);
      red = Math.floor(Math.random()*11+1);
      blue = Math.floor(Math.random()*11+1);
      yellow = Math.floor(Math.random()*11+1);
      green = Math.floor(Math.random()*11+1);
      player= 0;
      $('#score').text(player);
      } 
function winner(){
alert("Winner! Winner! Chicken dinner! :(");
  wins++; 
  $('#wins').text(wins);
  reset();
}
function loser(){
alert ("You lost! :(");
  losses++;
  $('#losses').text(losses);
  reset()
}
  $('#red').on ('click', function(){
    player = player + red;
    console.log("New player = " + player);
    $('#score').text(player); 
        if (player == Random){
          winner();
        }
        else if ( player > Random){
          loser();
        }   
  })  
  $('#blue').on ('click', function(){
    player = player + blue;
    console.log("New player = " + player);
    $('#score').text(player); 
        if (player == Random){
          winner();
        }
        else if ( player > Random){
          loser();
        } 
  })  
  $('#yellow').on ('click', function(){
    player = player + yellow;
    console.log("New player= " + player);
    $('#score').text(player);
          if (player == Random){
          winner();
        }
        else if ( player > Random){
          loser();
        } 
  })  
  $('#green').on ('click', function(){
    player = player + green;
    console.log("New player = " + player);
    $('#score').text(player); 
          if (player == Random){
          winner();
        }
        else if ( player > Random){
          loser();
        }
  });   
}); 