


let data = {
    buttonsArray : [0,1,2,3,4,5,6,7,8,9,'+','-','/','*','(',')','='],
    mainDOM : document.querySelector('#wrapper'),
    resultDOM: document.querySelector('#calculation-result'),
   
}

function init(){
    for(let i=0; i<data.buttonsArray.length; i++){
        data.mainDOM.insertAdjacentHTML('beforeend', `
            <input 
                class="button button__${data.buttonsArray[i]}" 
                readonly value="${data.buttonsArray[i]}
                
            ">
        `);
    }
}

init();

let arrButtons = document.querySelectorAll('.button');

console.log(arrButtons);

for(let i=0; i<arrButtons.length; i++){
    arrButtons[i].addEventListener('click', function(){
        if(arrButtons[i].value.trim() !== "="){
            data.resultDOM.value += arrButtons[i].value.trim()
        }
        console.log(arrButtons[i].value)
    })
}

