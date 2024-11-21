import Phaser from "phaser";

export default class AnswerButton extends Phaser.GameObjects.Container {
  private bg: Phaser.GameObjects.Rectangle;
  private label: Phaser.GameObjects.Text;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string,
    callback: () => void
  ) {
    super(scene, x, y);
    this.bg = scene.add.rectangle(0, 0, 200, 50, 0x007bff);
    this.bg.setInteractive({ useHandCrusor: true });
    this.label = scene.add.text(0, 0, text, {});
    this.label.setOrigin(0.5, 0.5);
    this.add(this.bg);
    this.add(this.label);
    scene.add.existing(this);

    this.bg.on("pointerup", () => {
      if (callback) callback();
    });
  }
}
