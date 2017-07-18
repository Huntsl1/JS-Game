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
console.log(knight);

var wizard = new Player("wizard", 100, 25, 50, 2, 2);
console.log(wizard);

Player.prototype.attack = function(Enemy) {
  if (Math.floor(Math.random() * 100)  <= (this.miss * Enemy.speed)){
    console.log ("Miss!");
  } else {
  Enemy.currenthp -= ((Math.floor(Math.random() * this.strength) + 10) - Enemy.armor);
    if (Enemy.currenthp <= 0) {
      console.log("Dead.");
    } else {
  console.log(Enemy);
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
console.log(goblin);

var demon = new Enemy("demon", 85, 20, 40, 1, 10);
console.log(demon);

Enemy.prototype.attack = function(Player) {
  if (Math.floor(Math.random() * 100)  <= (this.miss * Player.speed)){
    console.log ("Dodge!");
  } else {
  Player.currenthp -= ((Math.floor(Math.random() * this.strength) + 10) - Player.armor);
    if (Player.currenthp <= 0) {
      console.log("You Died.");
    } else {
  console.log(Player);
    }
  }
};
