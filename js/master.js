// generazione ciclo da 1 a 100
let boxes = document.querySelector('.boxes');

// box diversi
for (let box = 1; box <= 100; box++) {

    if((box % 3 === 0)&&(box % 5 === 0)){
        boxes.innerHTML += ` <div class="square box-3-5">fizzbuzz</div>`;
    }
    else if(box % 3 === 0){
        boxes.innerHTML += ` <div class="square box-3">fizz</div>`;
    }
    else if (box % 5 === 0){
        boxes.innerHTML += ` <div class="square box-5">buzz</div>`;
    }
    else {
        boxes.innerHTML += ` <div class="square">${box}</div>`;
    }
    
}





