const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var playerArrows = [];
var board1, board2;
var numberOfArrows = 10;

var score = 0;

function preload() {
  backgroundImg = loadImage("./assets/o.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  
  playerBase = new PlayerBase(300, 600, 180, 150);
  player = new Player(285, playerBase.body.position.y - 130, 50, 200);
  playerArcher = new PlayerArcher(
    320,
    playerBase.body.position.y - 65 ,
    60,
    30
  );
 

  board1 = new Board(width - 700, 570, 500, 900);
  board2 = new Board2(width - 800, height - 300, 50, 200);

  angleMode(DEGREES)
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  playerArcher.display();
  playerBase.display();
  
  
  player.display();
  board1.display();
  board2.display();

  for (var i = 0; i < playerArrows.length; i++) {
    if (playerArrows[i] !== undefined) {
      playerArrows[i].display();

  

      var board2Collision = Matter.SAT.collides(
        board2.body,
        playerArrows[i].body
      );

      

      
      var posX = playerArrows[i].body.position.x;
      var posY = playerArrows[i].body.position.y;

      if (posX > width || posY > height) {
        if (!playerArrows[i].isRemoved) {
          playerArrows[i].remove(i);
        } else {
          playerArrows[i].trajectory = [];
        }
      }
    }
  }

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("Pegue a manga!", width / 2, 100);

  // Contagem de Flechas
  fill("#FFFF");
  textAlign("center");
  textSize(30);
  text("Pedras Restantes: " + numberOfArrows, 200, 100);
  
  // Pontuação
  fill("#FFFF");
  textAlign("center");
  textSize(30);
  text("Pontuação: " + score, width - 200, 100);

  /*if (numberOfArrows == 5) {
    gameOver();
  }*/

  if (numberOfArrows == 0) {
    gameOver();
  }

  /*if (numberOfArrows = 0) {
    gameOver();
  }*/

  /*if (numberOfArrows == 0) {
    gameOver;
  }*/

}

function keyPressed() {
  if (keyCode === 32) {
    if (numberOfArrows > 0) {
      var posX = playerArcher.body.position.x;
      var posY = playerArcher.body.position.y;
      var angle = playerArcher.body.angle;

      var arrow = new PlayerArrow(posX +30, posY-55, angle);

      arrow.trajectory = [];
      Matter.Body.setAngle(arrow.body, angle);
      playerArrows.push(arrow);
      numberOfArrows -= 1;
    }
  }
}

function keyReleased() {
  if (keyCode === 32) {
    if (playerArrows.length) {
      var angle = playerArcher.body.angle;
      playerArrows[playerArrows.length - 1].shoot(angle);
    }
  }
}

function gameOver() {
  swal(
    {
     title: `Fim de Jogo!!!`,
      text: "Obrigado por jogar!!",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/PiratesInvision/main/assets/board.png",
      imageSize: "150x150",
      confirmButtonText: "Jogar Novamente"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}


