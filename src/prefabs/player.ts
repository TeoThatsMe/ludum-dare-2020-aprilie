import { Newstate } from "../states/newstate"
import { Platform } from "./platform";

export class Player extends Phaser.Sprite {
    private vy = 0; // velocity on the y axis
    private groundY = 510; // how low is the ground on screen?
    private gravity = 0.9;

    private state: Newstate;

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "player");
        this.anchor.set(0.5, 1);
        this.scale.setTo(4);
        game.add.existing(this);

        this.state = this.game.state.getCurrentState() as Newstate;
    }

    public jump() {
        this.vy = -15;
    }

    public update() {
        this.y += this.vy;
        this.vy += this.gravity;
        if ( this.y > this.groundY ) {
            this.y = this.groundY;
            this.vy = 0;
        }

        this.state.platforms.forEach( (it: Platform) => {
            if ( it.isPlayerAbove(this) ) {
                const platformHeight = it.getHeight();
                if ( this.y + this.vy > platformHeight ) {
                    this.y = platformHeight;
                    this.vy = 0;
                }
            }
        });
    }
}