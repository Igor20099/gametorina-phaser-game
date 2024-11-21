import { Scene } from "phaser";

class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.audio("accept", "sounds/accept.ogg");
    this.load.audio("lose", "sounds/lose.ogg");
  }

  create() {
    //Переходим после загрузки игровых ассетов на новую сцену
    this.scene.start("MainScene");
  }
}

export default PreloadScene;
