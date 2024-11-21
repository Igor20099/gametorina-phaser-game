import Phaser from "phaser";

export default class QuestionText extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene, x: number, y: number, text: string) {
    super(scene, x, y, text, {});
    this.scene.add.existing(this);
  }
}
