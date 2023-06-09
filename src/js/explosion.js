import { ExplosionSound } from './sounds';
import explosion from '../assets/img/explosion/explosions.png';

export class Explosion {
  constructor(game){
    this.game = game;
    this.free = true;
    this.x = 0;
    this.y = 0;
    this.dx = 0;

    this.image = document.getElementById('explosions');
    this.image.src = explosion;
    this.spriteWidth = 300;
    this.spriteHeight = 300;
    this.frameX = 0;
    this.frameY = Math.floor(Math.random() * 3);
    this.maxFrame = 22;

    this.animationTimer = 0;
    this.fpsInverse = .10;
    this.animationInterval = 1000 * this.fpsInverse;

    this.explosionSound = new ExplosionSound();
  }
  draw(context){
    if (!this.free){
      context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - this.spriteWidth * .5, this.y - this.spriteHeight * .5, this.spriteWidth, this.spriteHeight);
    }
  }
  
  update(deltaTime){
    this.x += this.dx * (deltaTime + this.game.speed);
    if (this.animationTimer > this.animationInterval){
      this.frameX++;
      if (this.frameX > this.maxFrame) this.reset();
      this.animationTimer = 0;
    } else {
      this.animationTimer += deltaTime;
    }
  }
  reset(){
    this.free = true;
  }
  start(x, y, dx){
    this.free = false;
    this.x = x;
    this.y = y;
    this.frameX = 0;
    this.dx = dx;
  }
}