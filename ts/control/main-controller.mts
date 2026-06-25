import { Player } from "../model/player.mjs";

export class MainController {
  static readonly #ROWS = 16;
  static readonly #COLUMNS = 24;

  static readonly TOP = "top";
  static readonly RIGHT = "right";
  static readonly BOTTOM = "bottom";
  static readonly LEFT = "left";

  static readonly #BORDERS = [MainController.TOP, MainController.RIGHT, MainController.BOTTOM, MainController.LEFT];

  static readonly #NO_RIGHT = "no-right";
  static readonly #NO_LEFT = "no-left";

  #player: Player | null = null;

  start(): void {
    const table = document.createElement("table");
    for (let i = 0; i < MainController.#ROWS; i++) {
      const row = table.insertRow(i);
      for (let j = 0; j < MainController.#COLUMNS; j++) {
        const cell = row.insertCell(j);
        if (this.#isFirstRow(i)) {
          cell.classList.add(MainController.TOP);
        } else if (this.#isLastRow(i)) {
          cell.classList.add(MainController.BOTTOM);
        }
        if (!this.#isFirstRow(i) && this.#isFirstColumn(j)) {
          cell.classList.add(MainController.LEFT);
        } else if (!this.#isLastRow(i) && this.#isLastColumn(j)) {
          cell.classList.add(MainController.RIGHT);
        }

        if (this.#rand()) {
          cell.classList.add(MainController.TOP);
        }
        if (this.#rand()) {
          cell.classList.add(MainController.BOTTOM);
        }
        if (this.#rand() && !(this.#isFirstRow(i) && this.#isFirstColumn(j))) {
          cell.classList.add(MainController.LEFT);
        }
        if (this.#rand() && !(this.#isLastRow(i) && this.#isLastColumn(j))) {
          cell.classList.add(MainController.RIGHT);
        }

        if (MainController.#BORDERS.every((className) => cell.classList.contains(className))) {
          if (this.#rand()) {
            cell.classList.remove(MainController.TOP);
          }
          if (this.#rand()) {
            cell.classList.remove(MainController.RIGHT);
          }
          if (this.#rand()) {
            cell.classList.remove(MainController.BOTTOM);
          }
          if (this.#rand()) {
            cell.classList.remove(MainController.LEFT);
          }
        }
      }
    }
    table.rows[0].cells[0].classList.add(MainController.#NO_LEFT);
    table.rows[MainController.#ROWS - 1].cells[MainController.#COLUMNS - 1].classList.add(MainController.#NO_RIGHT);
    const lab = document.getElementById("lab");
    if (lab) {
      lab.innerText = "";
      lab.appendChild(table);
    }
    this.#player = new Player(table, 0, 0);
    this.#addListenners();
  }

  #addListenners(): void {
    window.addEventListener("keydown", (event) => this.#eventKeyDown(event));
  }

  #eventKeyDown(event: KeyboardEvent) {
    if (this.#player) {
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          this.#player.moveUp();
          break;
        case "ArrowRight":
          event.preventDefault();
          this.#player.moveRight();
          break;
        case "ArrowDown":
          event.preventDefault();
          this.#player.moveDown();
          break;
        case "ArrowLeft":
          event.preventDefault();
          this.#player.moveLeft();
          break;
        default:
          return;
      }
    }
  }

  #isFirstCell(i: number, j: number): boolean {
    return this.#isFirstRow(i) && this.#isFirstColumn(j);
  }
  #isLastCell(i: number, j: number): boolean {
    return this.#isLastRow(i) && this.#isLastColumn(j);
  }

  #isFirstRow(i: number): boolean {
    return i == 0;
  }
  #isLastRow(i: number): boolean {
    return i == MainController.#ROWS - 1;
  }

  #isFirstColumn(j: number): boolean {
    return j == 0;
  }
  #isLastColumn(j: number): boolean {
    return j == MainController.#COLUMNS - 1;
  }

  #rand(): boolean {
    return this.#randBetween(1, 4) == 1;
  }

  #randBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
