export class Player extends Phaser.Sprite {
    private vy = 0; // velocity on the y axis
    private groundY = 480; // how low is the ground on screen?
    private gravity = 0.9;

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "player");
        this.anchor.setTo(0.5);
        this.scale.setTo(4);
        game.add.existing(this);
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
    }
}