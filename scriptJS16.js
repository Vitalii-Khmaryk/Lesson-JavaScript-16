const getS = selector => document.querySelector(selector);

//стилізація і добавлення функціоналу кнопці edit
getS('.btn-edit').onclick=function () {
    getS('.btn-edit').classList.toggle('shadowEdit');
    getS('.btn-style').classList.remove('shadowStyle');
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value=getS('.top-block').innerHTML;
}
//стилізація і добавлення функціоналу кнопці edit

//при нажатті кнопки save пересення елементів до top-block і видалення блоку edit-block
getS('.btn-save').onclick=function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML=getS('.edit-area').value;
}
//при нажатті кнопки save пересення елементів до top-block і видалення блоку edit-block

//функціонал кнопки style
getS('.btn-style').addEventListener('click',function (){
    getS('.btn-style').classList.toggle('shadowStyle');
    getS('.btn-edit').classList.remove('shadowEdit');
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})
//функціонал кнопки style

//вибір розміру і стилю тексту
function fontSize() {
    getS('.top-block').style.fontSize=event.target.value;
}

getS('.fF').onchange=function () {
    getS('.top-block').style.fontFamily=event.target.value;
}
//вибір розміру і стилю тексту

/*Зміна кольору тексту*/
let colors=['red','green','blue','yellow','pink','gray','black','white','violet'];
for(let i =0 ;i<getS('.colors').children.length;i++){
    getS('.colors').children[i].style.backgroundColor=colors[i];
getS('.colors').children[i].onclick=function () {
    getS('.top-block').style.color=event.target.style.backgroundColor;
    getS('.colors').classList.remove('d-flex');
    getS('.btn-text-color').classList.remove('shadow');
}
}
getS('.btn-text-color').onclick=function(){
    getS('.btn-text-color').classList.toggle('shadow');
    getS('.btn-bg-color').classList.remove('shadow');
    getS('.colors').classList.toggle('d-flex');
    getS('.colorsBg').classList.remove('d-flex');
}
/*Зміна кольору тексту*/

/*Зміна кольору background */
let colorsBg=['red','green','blue','yellow','pink','gray','black','white','violet'];
for(let i =0 ;i<getS('.colorsBg').children.length;i++){
    getS('.colorsBg').children[i].style.backgroundColor=colors[i];
getS('.colorsBg').children[i].onclick=function () {
    getS('.top-block').style.backgroundColor=event.target.style.backgroundColor;
    getS('.colorsBg').classList.remove('d-flex');
    getS('.btn-bg-color').classList.remove('shadow');
}
}
getS('.btn-bg-color').onclick=function(){
    getS('.btn-bg-color').classList.toggle('shadow');
    getS('.btn-text-color').classList.remove('shadow');
    getS('.colorsBg').classList.toggle('d-flex');
    getS('.colors').classList.remove('d-flex');
}
/*Зміна кольору background */


/*Робить текст жирним*/ 
getS('.check-bold').onclick=function () {
    if (event.target.checked) {
        getS('.top-block').classList.add('bold');
    }
    else{
        getS('.top-block').classList.remove('bold');
    }
}
/*Робить текст жирним*/ 

/*Робить текст курсивним*/ 
getS('.check-cursive').onclick=function () {
    if (event.target.checked) {
        getS('.top-block').classList.add('cursive');
    }
    else{
        getS('.top-block').classList.remove('cursive');
    }
}
/*Робить текст курсивним*/ 

//появлення блока second i зникання first при кліку на кнопку add
getS('.btn-add').onclick=function(){
    getS('.first').style.display='none';
    getS('.second').classList.add('show');
}
//появлення блока second i зникання first при кліку на кнопку add

//при кліку на радіо елемент поява блоку і форми create-list 
getS('#radio-listID').onclick=function (){
    getS('.create-list').classList.toggle('show');
    getS('.create-table').classList.remove('show');
    getS('#blockForTable').classList.remove('hh');
}
//при кліку на радіо елемент поява блоку і форми create-list

//функціонал кнопки li
const list=document.forms['form-list'];
getS('.btn-create-list').onclick=function (){
    const countLi=list.count.value;
    const typeLi=list.type.value;
    getS('.edit-area').value+=`<ul style="list-style-type:${typeLi}">`;
for(let i=0; i<countLi;i++){
   getS('.edit-area').value+=`<li>${i+1}</li>`;
}
    getS('.edit-area').value+='</ul>';
    if(getS('.top-block').matches(".hh")===false){
        getS('.top-block').classList.add('hh');
    }

    getS('.first').style.display='block';
    getS('.second').classList.remove('show');
}
//функціонал кнопки li

//поява блоку з формою таблиці
getS('#radio-tableID').onclick=function (){
    getS('.create-list').classList.remove('show');
    getS('.create-table').classList.toggle('show');
    getS('#blockForTable').classList.toggle('hh');
}
//поява блоку з формою таблиці


//генерація таблиць функціонал кнопки table
const table=document.forms['form-table'];
getS('.btn-create-table').onclick=function(){
const countTr=table.countTR.value;
const countTd=table.countTD.value;
const widthTd=table.widthOfTD.value;
const heightTd=table.heightOfTD.value;
const wBorder=table.widthBorder.value;
const stb=table.selecttb.value;
const scb=table.selectcb.value;
getS('.edit-area').value+=`<table style="border-collapse: collapse;">`;
for(let i=0; i<countTr;i++){
    getS('.edit-area').value+=`<tr style="border:${wBorder}px ${stb} ${scb};">`;
for (let i=0;i<countTd;i++){
    getS('.edit-area').value+=`<td style="width: ${widthTd}px;height: ${heightTd}px;border:${wBorder}px ${stb} ${scb};"><span style="color:${scb};">TD</span></td>`;
}
    getS('.edit-area').value+=`</tr>`;
}
getS('.edit-area').value+=`</table>`;
if(getS('.top-block').matches(".hh")===false){
    getS('.top-block').classList.add('hh');
}
getS('.top-block').classList.add('hh');
getS('.first').style.display='block';
getS('.second').classList.remove('show');
}
//генерація таблиць функціонал кнопки table