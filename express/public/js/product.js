let menuName = '';



//무슨 메뉴를 클릭했는지 알아내서 페이지 이동 및 내용 변경
function getSelectMenuName(){
    let btn = document.querySelectorAll('#btn');

    btn.forEach(element=>{
        element.addEventListener('click', e=>{
            e.preventDefault();
            const selectMenuName = e.target.innerText;
            menuName = selectMenuName;
        });
    })
}