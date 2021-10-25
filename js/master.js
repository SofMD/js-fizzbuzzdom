// generazione ciclo da 1 a 100
const boxes = document.querySelector('.boxes');

for (let box = 1; box <= 100; box++) {
    console.log(box);
    boxes.innerHTML += ` <div class="square">${box}</div>`;
    // calcolo numeri divisibili per 3
    if(box % 3 === 0){
        console.log('div3')
    }
}