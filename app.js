var aButton = document.getElementById("a_button");

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
    console.log ("Miss!");
  } else {
    // console.log('currenthp',typeof enemy.currenthp);
    enemy.currenthp -= ((Math.floor(Math.random() * Number(player.strength)) + 10) - Number(enemy.armor));
    if (enemy.currenthp <= 0) {
      console.log("Dead.");
    } else {
    console.log('ENEMY HP', enemy.currenthp);
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
  if (Math.floor(Math.random() * 100)  <= (enemy.miss * player.speed)){
    console.log ("Dodge!");
  } else {
  player.currenthp -= ((Math.floor(Math.random() * enemy.strength) + 10) - player.armor);
    if (player.currenthp <= 0) {
      console.log("You Died.");
    } else {
  console.log('PLAYER HP', player.currenthp);
    }
  }
};

var aButton = document.getElementById("a_button");
// console.log('aButton', aButton);
//console.log(currentPlayer.attack);

aButton.addEventListener("click", currentPlayer.attack);
aButton.addEventListener("click", currentEnemy.attack);
