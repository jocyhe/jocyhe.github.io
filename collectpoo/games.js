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
    poo = createSprite(width / 2, 0, 0, 0);
    poo.addImage(pooImage);
    enemy = createSprite(width / 2, 0, 0, 0);
    enemy.addImage(enemyImage);
    bomb = createSprite(width / 2, 0, 0, 0);
    bomb.addImage(bombImage);
    money = createSprite(width / 2, 0, 0, 0);
    money.addImage(moneyImage);
    
    poo.rotationSpeed = 3.0;
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

        pooSprites.position.y = pooSprites.position.y + height / 500;
        if (pooSprites.position.y > height) {
            pooSprites.position.y = 0;
            pooSprites.position.x = random(5, width - 5);
        }
        if (random()>0.99) {
            var poo = createSprite;
            poo.addImage(pooImage);
            pooSprites.add(poo);
        }
        
        enemy.position.y = enemy.position.y + height / 300;
        if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(5, width - 5);
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
        
         if (poo.overlap(player)){
            isGameOver = false;
            score += 1;
        }

        if (enemy.overlap(player)) {
            isGameOver = false;
            score -= 5
        }
        
        if (bomb.overlap(player)) {
            isGameOver = true;
        }
        
        if (money.overlap(player)) {
            isGameOver = false;
            score += 10
            money.remove();
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
