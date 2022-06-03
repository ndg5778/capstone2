const color = document.querySelector('.color-list');

//데이터 값을 읽어 그림 추가(행으로 계산)
function addProduct(){
    const product = document.createElement('div');
}

//데이터 값을 읽어 color 추가 (중간 열 만큼 반복)
function addColor(){
    const div = document.createElement('div');
    div.className += product_color;
    div.style.background = "";
    div.style.border = "1px black solid";
}


//무슨 메뉴를 클릭했는지 알아내서 페이지 이동 및 내용 변경
function getSelectMenuName(){
    let btn = document.querySelectorAll('#btn');

    btn.forEach(element=>{
        element.addEventListener('click', e=>{
            e.preventDefault();
            const selectMenuName = e.target.innerText;
            const readfileName = "list/"+selectMenuName+"/data.txt";
            return readfileName;
        });
    })
}

export{color, getSelectMenuName, addColor, addProduct};