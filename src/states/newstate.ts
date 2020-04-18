import { Player } from "../prefabs/player";

export class Newstate extends Phaser.State {
    private background;
    private player: Player;
    private upKey: Phaser.Key;
    private downKey: Phaser.Key;
    private leftKey: Phaser.Key;
    private rightKey: Phaser.Key;
    private yspeed = 0;
    private xspeed = 0;
    public create(): void {
        this.background = this.game.add.sprite(0, 0, "background");
        this.player = new Player(this.game, 75, 100);
        this.setupInput();
        }
    private setupInput() {
        this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
        this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
        this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
        }
    public update() {
        if ( this.leftKey.isDown ) {
            this.player.x -= 10;
        }
        if ( this.rightKey.isDown ) {
            this.player.x += 10;
        }
        if ( this.upKey.justDown ) {
            this.player.jump();
        }
    }

    }
