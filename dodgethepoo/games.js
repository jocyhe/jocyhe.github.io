var player;
var pooSprites;
var enemy;
var bomb;
var money;
var playerImage;
var pooSpritesImage;
var enemySpritesImage;
var bombSpritesImage;
var moneySpritesImage;
var backgroundImage;
var isGameOver;
var score;

function preload() {
    playerImage = loadImage("https://i.imgur.com/cgSqXqs.png");
    pooImage = loadImage("https://i.imgur.com/woiNSUE.png");
    backgroundImage = loadImage("https://i.imgur.com/6HSh05z.jpg");
    enemyImage = loadImage("https://i.imgur.com/5xPuc8j.png");
    bombImage = loadImage("https://i.imgur.com/V2iO7Z9.png")
    moneyImage = loadImage("https://i.imgur.com/d2dCXEG.png")

}

function setup() {
    isGameOver = false;
    score = 0;
    
    createCanvas(windowWidth, windowHeight);

    player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
    player.addImage(playerImage);
    poo = createSprite(width / 2, 0, 0, 0);
    poo.addImage(pooImage);
    poo2 = createSprite(width / 2, 0, 0, 0);
    poo2.addImage(pooImage);
    poo3 = createSprite(width / 2, 0, 0, 0);
    poo3.addImage(pooImage);
    poo4 = createSprite(width / 2, 0, 0, 0);
    poo4.addImage(pooImage);
    enemy = createSprite(width / 2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy1 = createSprite(width / 2, 0, 0, 0);
    enemy1.addImage(enemyImage);
    bomb = createSprite(width / 2, 0, 0, 0);
    bomb.addImage(bombImage);
    money = createSprite(width / 2, 0, 0, 0);
    money.addImage(moneyImage);
    
    poo.rotationSpeed = 3.0;
    poo2.rotationSpeed = 4.0;
    poo3.rotationSpeed = 3.0;
    poo4.rotationSpeed = 3.5;
    enemy.rotationSpeed = 4.0;
    enemy1.rotationSpeed = 4.0;
    bomb.rotationSpeed = 5.0;
    money.rotationSpeed = 5.0;
}

function draw() {
    if (isGameOver) {
        gameOver()
      } 
      else {
 
        background(backgroundImage);

        if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
            player.position.x += 4;
        }
        if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
            player.position.x -= 4;
        }

        poo.position.y = poo.position.y + height / 500;
        if (poo.position.y > height) {
            poo.position.y = 0;
            poo.position.x = random(5, width - 5);
        }

        poo2.position.y = poo2.position.y + height / 300;
        if (poo2.position.y > height) {
            poo2.position.y = 0;
            poo2.position.x = random(5, width - 5);
        }

        poo4.position.y = poo2.position.y + height / 300;
        if (poo4.position.y > height) {
            poo4.position.y = 0;
            poo4.position.x = random(5, width - 5);
        }

        poo3.position.y = poo3.position.y + height / 300;
        if (poo3.position.y > height) {
            poo3.position.y = 0;
            poo3.position.x = random(5, width - 5);
        }
        
        enemy.position.y = enemy.position.y + height / 300;
        if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(5, width - 5);
        }
        
        enemy1.position.y = enemy1.position.y + height / 300;
        if (enemy1.position.y > height) {
            enemy1.position.y = 0;
            enemy1.position.x = random(5, width - 5);
        }
        
        bomb.position.y = bomb.position.y + height / 300;
        if (bomb.position.y > height) {
            bomb.position.y = 0;
            bomb.position.x = random(5, width - 5);
        }
        
        money.position.y = money.position.y + height / 300;
        if (money.position.y > height) {
            money.position.y = 0;
            money.position.x = random(5, width - 5);
        }
        
        if (poo2.overlap(player)) {
            isGameOver = false;
            score += 1;
        }
        
         if (poo.overlap(player)){
            isGameOver = false;
            score += 1;
        }
        
         if (poo3.overlap(player)) {
            isGameOver = false;
            score += 1;
        }
        
         if (poo4.overlap(player)) {
            isGameOver = false;
            score += 1;
        }

        if (enemy.overlap(player) || enemy1.overlap(player)) {
            isGameOver = false;
            score -= 5
        }
        
        if (enemy1.overlap(player)) {
            isGameOver = false;
            score -= 5
        }
        
        if (bomb.overlap(player)) {
            isGameOver = true;
        }
        
        if (money.overlap(player)) {
            isGameOver = false;
            score += 10
        }
        
        drawSprites();
        textAlign(RIGHT);
        text(score, width/2, height/2);
    }
}

function touchMoved() {
    player.position.x = touchX;
}

function gameOver() {
    background(0);
    fill("white");
    textAlign(CENTER);
    text("Your Score Was: " + score, width/2, height/2);
    text("Game Over! Click Anywhere to Restart!", width/2, 3*height/4);
}

function touchStarted() {
    if (isGameOver) {
        isGameOver = false;
        score = 0;
        player.position.x = width / 2;
        player.position.y = height - (playerImage.height / 2);
        poo.position.x = width / 2;
        poo.position.y = 0;
        poo2.position.x = width / 2;
        poo2.position.y = 0;
        poo3.position.x = width / 2;
        poo3.position.y = 0;
        poo4.position.x = width / 2;
        poo4.position.y = 0;
        enemy.position.x = width / 2;
        enemy.position.y = 0;
        bomb.position.x = width / 2;
        bomb.position.y = 0;
        enemy1.position.x = width / 2;
        enemy1.position.y = 0;
        money.position.x = width / 2;
        money.position.y = 0;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
