import { Player } from "./player";

export class Platform {
    private graphics;
    private width;

    constructor(game: Phaser.Game, x: number, y: number, width: number) {
        this.width = width;
        const graphics = game.add.graphics(x, y);
        graphics.beginFill(0x000000);
        graphics.drawRoundedRect(0, 0, width, 25, 10);
        graphics.endFill();
        this.graphics = graphics;
    }

    public move(x: number, y: number) {
        this.graphics.x += x;
        this.graphics.y += y;
    }

    public isPlayerAbove( player: Player ): boolean {
        if ( player.x > this.graphics.x && player.x < this.graphics.x + this.width ) {
            if ( player.y < this.graphics.y ) {
                return true;
            }
        }
        return false;
    }

    public getHeight(): number {
        return this.graphics.y - 5;
    }
}