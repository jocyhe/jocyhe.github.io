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
    playerImage = loadImage("https://i.imgur.com/ULdOdHs.png");
    pooImage = loadImage("https://i.imgur.com/woiNSUE.png");
    backgroundImage = loadImage("https://i.imgur.com/6HSh05z.jpg");
    enemyImage = loadImage("https://i.imgur.com/J9JjXoX.png");
    bombImage = loadImage("https://i.imgur.com/mfs7WRh.png")
    moneyImage = loadImage("https://i.imgur.com/zi7ILXo.png")

}

function setup() {
    isGameOver = false;
    score = 0;
    
    createCanvas(windowWidth, windowHeight);

    player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width / 2, 0, 0, 0);
    enemy.addImage(enemyImage);
    bomb = createSprite(width / 2, 0, 0, 0);
    bomb.addImage(bombImage);
    money = createSprite(width / 2, 0, 0, 0);
    money.addImage(moneyImage);

    enemy.rotationSpeed = 4.0;
    bomb.rotationSpeed = 5.0;
    money.rotationSpeed = 5.0;
    
    pooSprites=new Group;
    enemySprites = new Group;
    bombSprites = new Group;
    moneySprites = new Group;
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
        
        for (var i = 0; i < pooSprites.length; i++) {
            console.log(pooSprites[i].position.y);
            pooSprites[i].position.y = pooSprites[i].position.y + height / 500;
            if (pooSprites[i].position.y > height) {
                pooSprites[i].position.y = 0;
                pooSprites[i].position.x = random(5, width - 5);
            }
            if (pooSprites[i].overlap(player)) {
                pooSprites[i].remove();
                score += 1; 
            }
        }
        
        if (random()>0.99) {
            var poo = createSprite(random()*width);
            poo.addImage(pooImage);
            poo.rotationSpeed = 3.0
            pooSprites.add(poo);
        }
        
        for (var i = 0; i < enemySprites.length; i++) {
            enemySprites[i].position.y = enemySprites[i].position.y + height / 500;
            if (enemySprites[i].position.y > height) {
                enemySprites[i].position.y = 0;
                enemySprites[i].position.x = random(5, width - 5);
            }
            if (enemySprites[i].overlap(player)) {
                enemySprites[i].remove();
                score -= 1; 
            }
        }
        
        if (random()>0.997) {
            var enemy = createSprite(random()*width);
            enemy.addImage(enemyImage);
            enemy.rotationSpeed = 4.0
            enemySprites.add(enemy);
        }
        
        for (var i = 0; i < bombSprites.length; i++) {
            bombSprites[i].position.y = bombSprites[i].position.y + height / 500;
            if (bombSprites[i].position.y > height) {
                bombSprites[i].position.y = 0;
                bombSprites[i].position.x = random(5, width - 5);
            }
            if (bombSprites[i].overlap(player)) {
                gameOver(true);
            }
        }
        
        if (random()>0.998) {
            var bomb = createSprite(random()*width);
            bomb.addImage(bombImage);
            bomb.rotationSpeed = 5.0
            bombSprites.add(bomb);
        }
        
        for (var i = 0; i < moneySprites.length; i++) {
            moneySprites[i].position.y = moneySprites[i].position.y + height / 500;
            if (moneySprites[i].position.y > height) {
                moneySprites[i].position.y = 0;
                moneySprites[i].position.x = random(5, width - 5);
            }
            if (moneySprites[i].overlap(player)) {
                moneySprites[i].remove();
                score += 10; 
            }
        }
        
        if (random()>0.9999) {
            var money = createSprite(random()*width);
            money.addImage(moneyImage);
            money.rotationSpeed = 4.5
            moneySprites.add(money);
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
        enemy.position.x = width / 2;
        enemy.position.y = 0;
        bomb.position.x = width / 2;
        bomb.position.y = 0;
        money.position.x = width / 2;
        money.position.y = 0;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
