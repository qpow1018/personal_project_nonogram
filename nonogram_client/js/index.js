const tableDatas = [];

function makeGameTable(xCount, yCount) {
  const containerElm = document.querySelector('.game-table');
  containerElm.replaceChildren(); // Element 초기화
  containerElm.style.width = `${40 * xCount}px`;

  tableDatas.splice(0, tableDatas.length); // data 배열 초기화

  for (let yPosition = 0; yPosition < yCount; ++yPosition) {
    for (let xPosition = 0; xPosition < xCount; ++xPosition) {
      const cellInst = new Cell(xPosition, yPosition);
      tableDatas.push(cellInst);

      const cellElm = getCellElementAndAddEvent(cellInst);
      containerElm.append(cellElm);
    }
  }
}

function getCellElementAndAddEvent(cellInst) {
  const cellElm = document.createElement('div');
  cellElm.classList.add('cell');

  cellElm.addEventListener('click', (e) => {
    cellInst.onClick();
    const cellState = cellInst.getState();
    mark(cellElm, cellState);
  });

  cellElm.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    cellInst.onRightClick();
    const cellState = cellInst.getState();
    mark(cellElm, cellState);
  });

  return cellElm;
}

function mark(targetElm, state) {
  targetElm.setAttribute('class', 'cell');
  targetElm.classList.add(state);
}