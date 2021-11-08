var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["66ade124-5c33-4dc7-ba8b-194d87899c36","3167b52d-b995-4b30-baea-95115633d387","50346a5a-da91-4650-a219-064805032ae8","2fb42056-e64f-40cb-b547-3b6c516e88d6"],"propsByKey":{"66ade124-5c33-4dc7-ba8b-194d87899c36":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"3167b52d-b995-4b30-baea-95115633d387":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"50346a5a-da91-4650-a219-064805032ae8":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"2fb42056-e64f-40cb-b547-3b6c516e88d6":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player = createSprite(200, 300, 40, 60);
player.setAnimation("car_black_1");
player.scale = 0.6;
var c1 = createSprite(randomNumber(20, 170), randomNumber(20, 100), 40, 60);
c1.setAnimation("car_blue_1");
c1.scale = 0.6;
var time = 0;
var gamestate = "start";
var g2 = "0";
var c2 = createSprite(randomNumber(230, 380), randomNumber(20, 100), 40, 60);
c2.setAnimation("car_green_1");
c2.scale = 0.6;
var c3 = createSprite(randomNumber(20, 380), randomNumber(100, 190), 40, 60);
c3.setAnimation("car_yellow_1");
c3.scale = 0.6;
function draw() {
  background("white");
  drawSprites();
  text("Score = "+time, 0, 15);
  if (keyDown("space")) {
    c1.velocityY = 5;
    c2.velocityY = 5;
    c3.velocityY = 5;
    g2 = "0";
    gamestate = "play";
  }
  if (gamestate === "play") {
    time = World.frameCount;
  }
  if (gamestate === "start") {
    text("Press space to start. And arrow keys to move", 70, 200);
    c1.velocityY = 0;
    c2.velocityY = 0;
    c3.velocityY = 0;
  }
  if (c1.y > 380) {
    c1.y = randomNumber(-80,-40);
    c1.x = randomNumber(20, 170);
  }
  if (c2.y > 380) {
    c2.y = randomNumber(-80,-40);
    c2.x = randomNumber(230, 380);
  }
  if (c3.y > 380) {
    c3.y = -30;
    c3.x = randomNumber(20, 380);
  }
  if (keyDown("left")) {
    player.x = player.x-5;
  }
  if (keyDown("right")) {
    player.x = player.x+5;
  }
  if (player.isTouching(c1) || (player.isTouching(c2) || player.isTouching(c3))) {
    gamestate = "start";
    g2 = "1";
    player.x = 200;
    c1.y = randomNumber(-80,-40);
    c1.x = randomNumber(20, 170);
    c2.y = randomNumber(-80,-40);
    c2.x = randomNumber(230, 380);
    c3.y = -30;
    c3.x = randomNumber(20, 380);
  }
  if (g2 == "1") {
    text("Game has ended", 130, 150);
    time = 0;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
