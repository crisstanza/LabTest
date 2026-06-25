import { MainController } from "../control/main-controller.mjs";

export class Player {
  static readonly #PLAYER = "player";
  static readonly #FLIP = "flip";

  #table: HTMLTableElement;
  #i: number;
  #j: number;

  constructor(table: HTMLTableElement, i: number, j: number) {
    this.#table = table;
    this.#i = i;
    this.#j = j;
    this.#showPlayer();
  }

  #showPlayer() {
    this.#table.rows[this.#i].cells[this.#j].classList.add(Player.#PLAYER);
  }
  #removePlayer(isFlip: boolean) {
    this.#table.rows[this.#i].cells[this.#j].classList.remove(Player.#PLAYER);
    if (isFlip) {
      this.#table.rows[this.#i].cells[this.#j].classList.remove(Player.#FLIP);
    }
  }

  #isFlip(): boolean {
    return this.#table.rows[this.#i].cells[this.#j].classList.contains(Player.#FLIP);
  }
  #flipPlayer() {
    this.#table.rows[this.#i].cells[this.#j].classList.add(Player.#FLIP);
  }

  moveUp(): void {
    if (this.#canMoveToUp()) {
      this.#refreshPlayer(() => this.#i--);
    }
  }
  moveRight(): void {
    if (this.#canMoveToRight()) {
      this.#refreshPlayer(() => this.#j++);
    }
  }
  moveLeft(): void {
    if (this.#canMoveToLeft()) {
      this.#refreshPlayer(() => this.#j--);
    }
  }
  moveDown(): void {
    if (this.#canMoveToDown()) {
      this.#refreshPlayer(() => this.#i++);
    }
  }

  #canMoveToUp(): boolean {
    if (!this.#isInFirstRow()) {
      if (!this.#hasTopWall()) {
        if (!this.#hasAboveBottomWall()) {
          return true;
        }
      }
    }
    return false;
  }
  #canMoveToRight(): boolean {
    if (!this.#isInLastColumn()) {
      if (!this.#hasRightWall()) {
        if (!this.#hasNextLeftWall()) {
          return true;
        }
      }
    }
    return false;
  }
  #canMoveToDown(): boolean {
    if (!this.#isInLastRow()) {
      if (!this.#hasBottomWall()) {
        if (!this.#hasBelowTopWall()) {
          return true;
        }
      }
    }
    return false;
  }
  #canMoveToLeft(): boolean {
    if (!this.#isInFirstColumn()) {
      if (!this.#hasLeftWall()) {
        if (!this.#hasPreviousRightWall()) {
          return true;
        }
      }
    }
    return false;
  }

  #hasTopWall(): boolean {
    return this.#table.rows[this.#i].cells[this.#j].classList.contains(MainController.TOP);
  }
  #hasRightWall(): boolean {
    return this.#table.rows[this.#i].cells[this.#j].classList.contains(MainController.RIGHT);
  }
  #hasBottomWall(): boolean {
    return this.#table.rows[this.#i].cells[this.#j].classList.contains(MainController.BOTTOM);
  }
  #hasLeftWall(): boolean {
    return this.#table.rows[this.#i].cells[this.#j].classList.contains(MainController.LEFT);
  }

  #hasBelowTopWall(): boolean {
    return this.#table.rows[this.#i + 1].cells[this.#j].classList.contains(MainController.TOP);
  }
  #hasPreviousRightWall(): boolean {
    return this.#table.rows[this.#i].cells[this.#j - 1].classList.contains(MainController.RIGHT);
  }
  #hasAboveBottomWall(): boolean {
    return this.#table.rows[this.#i - 1].cells[this.#j].classList.contains(MainController.BOTTOM);
  }
  #hasNextLeftWall(): boolean {
    return this.#table.rows[this.#i].cells[this.#j + 1].classList.contains(MainController.LEFT);
  }

  #isInFirstRow(): boolean {
    return this.#i == 0;
  }
  #isInLastRow(): boolean {
    return this.#i == this.#table.rows.length - 1;
  }
  #isInFirstColumn(): boolean {
    return this.#j == 0;
  }
  #isInLastColumn(): boolean {
    return this.#j == this.#table.rows[this.#i].cells.length - 1;
  }

  #refreshPlayer(movement: Function): void {
    const isFlip: boolean = this.#isFlip();
    this.#removePlayer(isFlip);
    movement();
    const wasFlip: boolean = isFlip;
    if (!wasFlip) {
      this.#flipPlayer();
    }
    this.#showPlayer();
  }
}
