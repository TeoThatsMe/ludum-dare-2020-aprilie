import { Howl } from "howler";

const createHowler: any = (
    src: string | Array<string>,
    preload: boolean = false
) => {
    const sound: any = new Howl({
        src: [].concat(src),
        preload: preload,

        volume: 1,
        onload: () => {
            sound.loaded = true;
        }
    });

    return sound;
};

export const Sound: any = createHowler([
    "assets/sounds/button.m4a",
    "assets/sounds/button.mp3",
    "assets/sounds/button.ogg"
]);
