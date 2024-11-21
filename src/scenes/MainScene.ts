import { Scene } from "phaser";
import questionsJSON from "../data/questions.json";
import QuestionText from "../ui/QuestionText";
import AnswerButton from "../ui/AnswerButton";

class MainScene extends Scene {
  private correctAnwer: string;
  private currentQuestion: number;
  private question!: QuestionText;
  private answers: AnswerButton[];
  constructor() {
    super("MainScene");
    this.correctAnwer = "";
    this.currentQuestion = 0;
    this.answers = [];
  }

  create() {
    this.getQuestion();
    this.events.on("clickAnswer", this.isCorrectAnswer, this);
  }
  isCorrectAnswer(answer: string) {
    if (answer === this.correctAnwer) {
      this.question.destroy();
      this.sound.play("accept");
      this.answers.forEach((answer) => {
        answer.destroy();
      });
      this.currentQuestion++;
      this.getQuestion();
    } else {
      this.question.destroy();
      this.answers.forEach((answer) => {
        answer.destroy();
      });
      this.sound.play("lose");
      this.currentQuestion = 0;
      this.getQuestion();
    }
  }
  getQuestion() {
    this.question = new QuestionText(this, 200, 100, "");
    this.question.setText(questionsJSON[this.currentQuestion].question);
    let pos_y = 200;
    questionsJSON[this.currentQuestion].options.forEach((answer) => {
      const answerButton = new AnswerButton(
        this,
        800 / 2,
        pos_y,
        answer,
        () => {
          this.events.emit("clickAnswer", answer);
        }
      );
      this.answers.push(answerButton);
      pos_y += 64;
    });
    this.correctAnwer = questionsJSON[this.currentQuestion].correct_answer;
  }
}

export default MainScene;
