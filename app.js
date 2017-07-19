var aButton = document.getElementById("a_button");
var sword = document.getElementById("sword_swing");
var sword2 = document.getElementById("sword_swing2");
var enemyData = document.getElementById("enemy_data");
var playerData = document.getElementById("player_data");
var playerHealthBar = document.getElementById("player_health_bar");

function playAudioSword() {
  if (Math.floor(Math.random() * 100) <= 50){
    sword.volume = 0.5;
    sword.play();
  } else {
    sword2.play();
  }
}

function Player (type,hp,miss,strength,speed,armor){
  this.type = type;
  this.hp = hp;
  this.currenthp = hp;
  this.miss = miss;
  this.strength = strength;
  this.speed = speed;
  this.armor = armor;
}

var knight = new Player("knight", 100, 10, 20, 1, 5);
console.log('knight', knight);

var wizard = new Player("wizard", 100, 25, 50, 2, 2);
console.log('wizard', wizard);

var currentPlayer = knight;

Player.prototype.attack = function() {
  var enemy = currentEnemy;
  var player = currentPlayer;
  if (Math.floor(Math.random() * 100)  <= (player.miss * enemy.speed)){
    enemyData.innerText = "MISS!" + "\nHP: " + enemy.currenthp;
  } else {
    // console.log('currenthp',typeof enemy.currenthp);
    enemy.currenthp -= ((Math.floor(Math.random() * Number(player.strength)) + 10) - Number(enemy.armor));
    if (enemy.currenthp <= 0) {
      enemyData.innerText = "ENEMY KILLED";
    } else {
      enemyData.innerText = 'HP: ' + enemy.currenthp;
    }
  }
};

function Enemy (type,hp,miss,strength,speed,armor){
  this.type = type;
  this.hp = hp;
  this.currenthp = hp;
  this.miss = miss;
  this.strength = strength;
  this.speed = speed;
  this.armor = armor;
}

var goblin = new Enemy("goblin", 60, 10, 10, 2, 5);
console.log('goblin', goblin);

var demon = new Enemy("demon", 85, 20, 40, 1, 10);
console.log('demon', demon);

var currentEnemy = goblin;

Enemy.prototype.attack = function() {
  var enemy = currentEnemy;
  var player = currentPlayer;

  var playerHealth = ((player.currenthp * 100) / (player.hp));
  console.log(playerHealth);
  playerHealthBar.style.width = playerHealth.toString() + '%';

  if (Math.floor(Math.random() * 100)  <= (enemy.miss * player.speed)){
    playerData.innerText = "DODGE!" + "\nHP: " + player.currenthp;
  } else {

    player.currenthp -= ((Math.floor(Math.random() * enemy.strength) + 10) - player.armor);
    if (player.currenthp <= 0) {
      playerData.innerText = "YOU DIED";
    } else {
      playerData.innerText = 'HP: ' + player.currenthp;
    }
  }
};


var aButton = document.getElementById("a_button");
// console.log('aButton', aButton);
//console.log(currentPlayer.attack);

aButton.addEventListener("click", currentPlayer.attack);
aButton.addEventListener("click", currentEnemy.attack);
aButton.addEventListener("click", playAudioSword);








































































































































$(document).ready(function(){
  $("#player_sprite").css("background-image", '#DEEED6');
});
//"enemy_sprite"

var e = $('#character-select').val();

if (e === [1]) {
  $('player_sprite').css("background-image", "knight.png");
} else {
  $('player_sprite').css("background-image", "wizard.png");
}

var knightImg = $('<img />',
             { id: 'knight',
               src: './images/knight.png',
             });

$('#knight').click(function(){
  knightImg.appendTo($('#player_sprite'));
});
var goblinImg = $(

  '<img />',
  {id: 'goblin',
  src: './images/goblin.png'

});
//$('#goblin')
