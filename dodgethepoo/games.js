var player;
var playerImage;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var enemyImage;
var backgroundImage
var isGameOver;

function preload() {
    playerImage = loadImage("https://i.imgur.com/cgSqXqs.png")
    enemyImage = loadImage("https://i.imgur.com/yHQhi3P.png")
    backgroundImage = loadImage("https://i.imgur.com/6HSh05z.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width / 2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy2 = createSprite(width / 2, 0, 0, 0);
    enemy2.addImage(enemyImage);
    enemy3 = createSprite(width / 2, 0, 0, 0);
    enemy3.addImage(enemyImage);
    enemy4 = createSprite(width / 2, 0, 0, 0);
    enemy4.addImage(enemyImage);
    enemy.rotationSpeed = 3.0;
    enemy2.rotationSpeed = 4.0;
    enemy3.rotationSpeed = 3.0;
    enemy4.rotationSpeed = 3.5;
    isGameOver = false;
}

function draw() {
    if (isGameOver) {
        gameOver();
    }
    else {
        background(backgroundImage);

        if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
            player.position.x += 2;
        }
        if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
            player.position.x -= 2;
        }

        enemy.position.y = enemy.position.y + height / 200;
        if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(5, width - 5);
        }

        enemy2.position.y = enemy2.position.y + height / 300;
        if (enemy2.position.y > height) {
            enemy2.position.y = 0;
            enemy2.position.x = random(5, width - 5);
        }

        enemy4.position.y = enemy2.position.y + height / 300;
        if (enemy4.position.y > height) {
            enemy4.position.y = 0;
            enemy4.position.x = random(5, width - 5);
        }

        enemy3.position.y = enemy3.position.y + height / 300;
        if (enemy3.position.y > height) {
            enemy3.position.y = 0;
            enemy3.position.x = random(5, width - 5);
        }

        if (enemy2.overlap(player)) {
            isGameOver = true;
        }

        drawSprites();

    }
}

function touchMoved() {
    player.position.x = touchX;
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width / 2, height / 2);
    text("Click Anywhere to Try Again", width / 2, 3 * height / 4);
}

function touchStarted() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width / 2;
        player.position.y = height - (playerImage.height / 2);
        enemy.position.x = width / 2;
        enemy.position.y = 0;
        enemy2.position.x = width / 2;
        enemy2.position.y = 0;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
