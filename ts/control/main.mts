export class MainController {
  #ROWS = 16;
  #COLUMNS = 32;

  #TOP = "top";
  #RIGHT = "right";
  #BOTTOM = "bottom";
  #LEFT = "left";

  start(): void {
    const table = document.createElement("table");
    for (let i = 0; i < this.#ROWS; i++) {
      const row = table.insertRow(i);
      for (let j = 0; j < this.#COLUMNS; j++) {
        const cell = row.insertCell(j);
        if (this.#firstRow(i)) {
          cell.classList.add(this.#TOP);
        } else if (this.#lastRow(i)) {
          cell.classList.add(this.#BOTTOM);
        }
        if (!this.#firstRow(i) && this.#firstColumn(j)) {
          cell.classList.add(this.#LEFT);
        } else if (!this.#lastRow(i) && this.#lastColumn(j)) {
          cell.classList.add(this.#RIGHT);
        }

        if (this.#rand()) {
          cell.classList.add(this.#TOP);
        }
        if (this.#rand()) {
          cell.classList.add(this.#BOTTOM);
        }
        if (this.#rand() && !(this.#firstRow(i) && this.#firstColumn(j))) {
          cell.classList.add(this.#LEFT);
        }
        if (this.#rand() && !(this.#lastRow(i) && this.#lastColumn(j))) {
          cell.classList.add(this.#RIGHT);
        }

        if (cell.classList.length == 4) {
          if (this.#rand()) {
            cell.classList.remove(this.#BOTTOM);
          }
          if (this.#rand()) {
            cell.classList.remove(this.#TOP);
          }
        }
      }
    }
    const lab = document.getElementById("lab");
    if (lab) {
      lab.innerText = "";
      lab.appendChild(table);
    }
  }

  #firstRow(i: number): boolean {
    return i == 0;
  }

  #lastRow(i: number): boolean {
    return i == this.#ROWS - 1;
  }

  #firstColumn(j: number): boolean {
    return j == 0;
  }

  #lastColumn(j: number): boolean {
    return j == this.#COLUMNS - 1;
  }

  #rand(): boolean {
    return this.#randBetween(1, 4) == 1;
  }

  #randBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
