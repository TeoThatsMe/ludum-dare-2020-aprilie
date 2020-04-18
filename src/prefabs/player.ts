export class Player extends Phaser.Sprite {
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "player");
        this.anchor.setTo(0.5);
        this.scale.setTo(4);
        game.add.existing(this);
    }
}