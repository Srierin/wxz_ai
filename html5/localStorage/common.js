const addItems =document.querySelector('.add-items'); //form
const itemsList = document.querySelector('.plates'); //列表

function addItem(e){
    e.preventDefault(); //阻止表单提交事件
}

addItems.addEventListener('submit',addItem); //监听表单提交事件