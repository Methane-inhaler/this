function fight(){
    var botWins = 0;
    var humanWins = 0;
    var botScore = 0;
     var humanScore = 0;
      while (true){
var userShoot = prompt("rock paper or scissors");
if(userShoot.toLowerCase == "rock"){
    document.getElementById('enemyPokemon').src = "images/nobackgroundrock.png"
}
    else if(userShoot.toLowerCase == "paper"){
        document.getElementById('enemyPokemon').src = "images/nobackgroundaper.png"
    }
        else if(userShoot.toLowerCase == "scissors"){
            document.getElementById('enemyPokemon').src = "images/nobackgroundscissors.png"
        }
            var computerChoice = Math.floor((Math.random() * 3)+1);
            if(computerChoice == 1){
                document.getElementById('myPokemon').src = "images/nobackgroundrock.png"
            }
                 else if(computerChoice == 2){
                document.getElementById('myPokemon').src = "images/nobackgroundaper.png"
                 }
                 else if(computerChoice == 3){
                  document.getElementById('myPokemon').src = "images/nobackgroundscissors.png"
                 }
                 if(humanScore >= 2 || botScore >= 2){
                 break
                }
                else if(userShoot.toLowerCase() == "rock" && computerChoice == 1){
                 document.getElementById('text').innerHTML = 'tie'
                 }
                 else if(userShoot.toLowerCase() == "rock" && computerChoice == 2){
                 document.getElementById('text').innerHTML = 'lose'
                  botScore++
                }
                else if(userShoot.toLowerCase() == "rock" && computerChoice == 3){
                  document.getElementById('text').innerHTML = 'win'
                   humanScore++
                }
                 else if(userShoot.toLowerCase() == "paper" && computerChoice == 1){
                  document.getElementById('text').innerHTML = 'lose'
                  botScore++
                }
                 else if(userShoot.toLowerCase() == "paper" && computerChoice == 2){
                  document.getElementById('text').innerHTML = 'tie'
                }
                 else if(userShoot.toLowerCase() == "paper" && computerChoice == 3){
                 document.getElementById('text').innerHTML = 'tie'
                }
                 else if(userShoot.toLowerCase() == "scissors" && computerChoice == 1){
                 document.getElementById('text').innerHTML = 'lose'
                  botScore++
                }
                else if(userShoot.toLowerCase() == "scissors" && computerChoice == 2){
                 document.getElementById('text').innerHTML = 'win'
                  humanScore++
                }
                else if(userShoot.toLowerCase() == "scissors" && computerChoice == 3){
                document.getElementById('text').innerHTML = 'tie'
            }
                else{
                     document.getElementById('text').innerHTML = 'are you stuipd'}
            }
                if (humanScore > botScore){
                  document.getElementById('text').innerHTML = 'you are victories'
                   humanWins++}
                 else{
                     document.getElementById('text').innerHTML = 'you lost'
                    botWins++}
}
function pokemon(){
     var swith = prompt("rock paper or scissors");
      if(swith == "rock"){
document.getElementById('enemyPokemon').src = "images/nobackgroundrock.png"
}
          if(swith == "paper"){
             document.getElementById('enemyPokemon').src = "images/nobackgroundaper.png"
          }
             else if(swith == "scissors"){
                 document.getElementById('enemyPokemon').src = "images/nobackgroundscissors.png"
            }}
function bag(){document.getElementById('text').innerHTML = "your broke!"
}
function run(){ window.close()
}