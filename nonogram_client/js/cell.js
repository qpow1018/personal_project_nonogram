const CellState = Object.freeze({
  default : 'default',
  active : 'active',
  close : 'close'
});

class Cell {
  #x;
  #y;
  #state = CellState.default;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  #setState(state) {
    this.#state = state;
  }

  getState() {
    return this.#state;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  onClick() {
    const currentState = this.getState();
    if (currentState !== CellState.active) {
      this.#state = CellState.active;
    } else {
      this.#state = CellState.default;
    }
  }

  onRightClick() {
    const currentState = this.getState();
    if (currentState !== CellState.close) {
      this.#state = CellState.close;
    } else {
      this.#state = CellState.default;
    }
  }
}