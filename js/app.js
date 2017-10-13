// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    // when enemy moves off canvas, reset position of enemy
    if (this.x > 550) {
        this.x = -150;
        this.speed = 150 + Math.floor(Math.random() * 600);
    }

// Collision checking between player and enemy
    if (player.x < this.x + 60 && player.x + 30 > this.x && player.y === this.y) {
      playerInput =  Math.floor((Math.random() * 5) + 1);
      player = new Player(200, 300, 50, playerInput);
      player.x = 200;
      player.y = 300;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed, randomCharacter) {
  this.x = x;
  this.y = y;
  this.speed = speed;

  if (playerInput === 1) {
    this.sprite = 'images/char-boy.png';
  } else if (playerInput === 2) {
    this.sprite = 'images/char-cat-girl.png';
  } else if (playerInput === 3) {
    this.sprite = 'images/char-horn-girl.png';
  } else if (playerInput === 4) {
    this.sprite = 'images/char-pink-girl.png';
  } else if (playerInput === 5) {
    this.sprite = 'images/char-princess-girl.png';
  }
};

Player.prototype.update = function(){
// Stop player when reaching wall boundaries
  if (this.y > 380) {
    this.y = 380;
  }

  if (this.x > 400) {
    this.x = 400;
  }

  if (this.x < 0) {
    this.x = 0;
  }

  // When Player reaches top to reset to start
  if  (this.y < 0) {
    playerInput =  Math.floor((Math.random() * 5) + 1);
    player = new Player(200, 300, 50, playerInput);
    this.x = 200;
    this.y = 300;
  }

};

Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {

  switch(keyPress) {
    case 'left':
    this.x -= this.speed + 50;
    break;
    case 'up':
    this.y -= this.speed + 30;
    break;
    case 'right':
    this.x += this.speed + 50;
    break;
    case 'down':
    this.y += this.speed + 30;
    break;
  }

};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemyPositions = [60, 140, 220];
var playerInput =  Math.floor((Math.random() * 5) + 1);
var player = new Player(200, 300, 50, playerInput);

enemyPositions.forEach(function(yPosition) {
    enemy = new Enemy(0, yPosition, 150 + Math.floor(Math.random() * 600));
    allEnemies.push(enemy);
});


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
