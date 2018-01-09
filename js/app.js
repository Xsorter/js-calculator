

let data = {
    numbersArray : [],
    mainDOM : document.querySelector('#wrapper'),
}

function init(){
    data.mainDOM.insertAdjacentHTML('beforeend', `
        <div>init</div>
    `);
}

init();