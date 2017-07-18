function Player (type,hp,miss,strength){
this.type = type;
this.hp = hp;
this.currenthp = hp;
this.miss = miss;
this.strength = strength;
}

var knight = new Player("knight", 100, 10, 20);
console.log(knight);

var wizard = new Player("wizard", 100, 25, 50);
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



function Enemy (type,hp,speed,armor){
this.type = type;
this.hp = hp;
this.currenthp = hp;
this.speed = speed;
this.armor = armor;
}

var goblin = new Enemy("goblin", 60, 2, 5);
console.log(goblin);

var demon = new Enemy("demon", 85, 1, 10);
console.log(demon);

Enemy.prototype.attack = function(Player) {
  Player.currenthp -= Math.floor(Math.random() * 20);
  console.log(Player);
};
