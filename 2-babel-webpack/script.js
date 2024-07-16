export function initBox(row, column){
    const backgroundColors = ["bg-red", 'bg-green', 'bg-blue'];
    const textStyles = ['text-bold','text-italic','text-strike','text-underline'];

    const parentElement = document.querySelector('.grid-container')
    for (let i = 0; i < row * column; i++) {
        const newBox = document.createElement('div');
        newBox.className = `grid-item ${backgroundColors[getRandomInt(3)]} ${textStyles[getRandomInt(4)]}`;
        newBox.id = `id-${(i+1).toString()}`;
        newBox.textContent = (i+1).toString();
        newBox.style.fontSize = '25px';
        newBox.style.textAlign = 'center';
        newBox.style.lineHeight = '100px';
        parentElement.appendChild(newBox);
    }
}
export function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
export function setBGRed(){
    const id = document.querySelector('#input-id').value;
    const selectedBox = document.querySelector(`#${id.toString()}`);
    selectedBox.classList.add('bg-red');
    selectedBox.classList.remove('bg-green');
    selectedBox.classList.remove('bg-blue');
    selectedBox.classList.remove('reset');

}
export function setBGGreen(){
    const id = document.querySelector('#input-id').value;
    const selectedBox = document.querySelector(`#${id.toString()}`);
    selectedBox.classList.remove('bg-red');
    selectedBox.classList.add('bg-green');
    selectedBox.classList.remove('bg-blue');
    selectedBox.classList.remove('reset');

}
export function setBGBlue(){
    const id = document.querySelector('#input-id').value;
    const selectedBox = document.querySelector(`#${id.toString()}`);
    selectedBox.classList.remove('bg-red');
    selectedBox.classList.remove('bg-green');
    selectedBox.classList.add('bg-blue');
    selectedBox.classList.remove('reset');

}
export function setTextBold(){
    const className = document.querySelector('#input-class').value;
    const selectedBoxes = document.querySelectorAll(`.${className.toString()}`);
    selectedBoxes.forEach(e => {
        e.classList.add('text-bold');
        e.classList.remove('text-italic');
        e.classList.remove('text-strike');
        e.classList.remove('text-underline');
        e.classList.remove('reset');
    });
}
export function setTextItalic(){
    const className = document.querySelector('#input-class').value;
    const selectedBoxes = document.querySelectorAll(`.${className.toString()}`);
    selectedBoxes.forEach(e => {
        e.classList.remove('text-bold');
        e.classList.add('text-italic');
        e.classList.remove('text-strike');
        e.classList.remove('text-underline');
        e.classList.remove('reset');
    });
}
export function setTextStrike(){
    const className = document.querySelector('#input-class').value;
    const selectedBoxes = document.querySelectorAll(`.${className.toString()}`);
    selectedBoxes.forEach(e => {
        e.classList.remove('text-bold');
        e.classList.remove('text-italic');
        e.classList.add('text-strike');
        e.classList.remove('text-underline');
        e.classList.remove('reset');
    });
}
export function setTextUnderline(){
    const className = document.querySelector('#input-class').value;
    const selectedBoxes = document.querySelectorAll(`.${className.toString()}`);
    selectedBoxes.forEach(e => {
        e.classList.remove('text-bold');
        e.classList.remove('text-italic');
        e.classList.remove('text-strike');
        e.classList.add('text-underline');
        e.classList.remove('reset');
    });
}

export function resetStyle(){
    const selector = document.querySelector('#input-query').value;
    const selectedItems = document.querySelectorAll(selector.toString());
    selectedItems.forEach(e => e.className=`grid-item reset`);
}

initBox(4,4);