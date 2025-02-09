import Bomb from './bomb';
import MovingObjects from './movingObjects';
import * as Lib from "./lib.js";

const STD_KEYMAP = {
    "up": "ArrowUp",
    "left": "ArrowLeft",
    "right": "ArrowRight",
    "down": "ArrowDown",
    "action": "Space"
}

const ALT_KEYMAP = {
    "up": "KeyW",
    "left": "KeyA",
    "right": "KeyD",
    "down": "KeyS",
    "action": "KeyE"
}

class KeyMap {
    constructor(...kwargs) {
        kwargs = {...STD_KEYMAP, ...kwargs}
        this.up     = kwargs["up"]
        this.left   = kwargs["left"]
        this.right  = kwargs["right"]
        this.down   = kwargs["down"]
        this.action = kwargs["action"]
    }
}

export default class Dino extends MovingObjects {
    constructor(object) {
        object.width = 60;
        object.height = 60;
        super(object);
        this.spriteSheetConfig = new Lib.SpriteSheetConfig(0, 0, 24, 28);
        this.keyMap = new KeyMap();
        this.bomb = 0;
        this.game = object.game;
        this.newBomb = [];
        //reset width and heigh when moving
    }

    draw(ctx) {
        const dinoSprite = new Image();
        if(this.status === 'burned'){
            this.spriteSheetConfig.sy = 0;
            this.spriteSheetConfig.sWidth = 21;
            this.spriteSheetConfig.sHeight = 29;
            dinoSprite.src = 'src/assets/deadDino.png'
        } else { dinoSprite.src = "src/assets/dinoSprite.png"}
        dinoSprite.addEventListener('load', () =>{
            // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
            ctx.drawImage(
                dinoSprite,
                // this.width * this.frameX, this.height * this.frameY,
                // this.width, this.height,
                ...this.spriteSheetConfig.toArgs(),
                this.x, this.y,
                60, 64
            )
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "white";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "red";
            ctx.rect(
                this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height
            )
            ctx.stroke();
        })
    }

    move(key, secondsPassed) {
        let moving = false;
        const moveAmount = Math.round(this.speed * secondsPassed);

        if (key[this.keyMap.up] && this.canMoveUp(moveAmount)) {
            this.y -= moveAmount;
            this.spriteSheetConfig.sy = 84.97;
            this.spriteSheetConfig.sWidth = 21;
            this.spriteSheetConfig.sHeight = 29;
            moving = true;
        }
        if (key[this.keyMap.left] && this.canMoveLeft(moveAmount)) {
            this.x -= moveAmount;
            this.spriteSheetConfig.sy = 0;
            this.spriteSheetConfig.sWidth = 24;
            this.spriteSheetConfig.sHeight = 28;
            moving = true;
        }
        if (key[this.keyMap.right] && this.canMoveRight(moveAmount)) {
            this.x += moveAmount;
            this.spriteSheetConfig.sy = 28;
            this.spriteSheetConfig.sWidth = 24;
            this.spriteSheetConfig.sHeight = 28;
            moving = true;
        }
        if (key[this.keyMap.down] && this.canMoveDown(moveAmount)) {
            this.y += moveAmount
            this.spriteSheetConfig.sy = 55.97;
            this.spriteSheetConfig.sWidth = 21;
            this.spriteSheetConfig.sHeight = 29;
            moving = true;
        }

        this.moving = moving;

        if (key[this.keyMap.action] && this.emptyTile(this.x, this.y)) {
            this.newBomb.push(new Bomb(this.x, this.y, this.game));
            this.bomb += 1;
        }

        if (this.spriteSheetConfig.sx == 0 && this.moving) {
            this.spriteSheetConfig.sx = this.spriteSheetConfig.sWidth
        } else {
            this.spriteSheetConfig.sx = 0
        }
    }

    clearBomb(bomb) {
        if(bomb.timer === 0){
            this.game.explosion.push(bomb)
            // bomb.explode()
            let idx = this.game.map.getIndex(bomb.bombX, bomb.bombY)
            this.game.map.tiles[idx] = 0;
            this.newBomb.shift();
            this.bomb -= 1;
        } else(bomb.timer--)
    }
}
