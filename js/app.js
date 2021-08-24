// use strict;


let right_section = document.getElementById('right_section');
let clear = document.getElementById('clear');
let form = document.getElementById('form');
let table = document.createElement('table');


if(localStorage.getItem('lest')===null){
    localStorage.setItem('lest',JSON.stringify([]));  
}
let moviearr = JSON.parse(localStorage.getItem('lest'));

function MovieLest (name,imge,release){
    this.name=name;
    this.imge=imge;
    // this.img.src= this.photo(nam,src);
    this.release=release;

    moviearr.push(this);
    localStorage.setItem('lest',JSON.stringify(moviearr));
}


MovieLest.prototype.photo = function(namzz,src0){

namzz = ['Action','Adventure','Animation','Comedy','Detective','Fantasy','History','Musical','Pirate','Romantic','SCI-FI','War','Western','Horror']
src0 = [
    'action.png','adventure.png','animation.png','comedy.png','detective.png','fantasy.png','history.png','horror.png','musical.png','pirate.png','romantic.png','sci-fi.png','war.png','western.png'
]
let imgF = document.createElement("img");
 
imgF.src = namzz[i];

 
src0.appendChild(imgF);
};

document.addEventListener('submit', subhandler);

function subhandler(event){
    event.preventDefault();

    let moName = event.target.name.value;
    let img = event.target.imge.value;
    let release = event.target.release.value;

    new MovieLest (moName,img,release);
    console.log(moviearr);
    render();
}
document.addEventListener('click', removefun);

function removefun(event){
    if(event.target.id =='clear'){
        right_section.innerHTML= ' ';
        localStorage.clear();
        moviearr = [];
    }
}

function render(){
      right_section.innerHTML=' ';
      right_section.appendChild(table);

      let row = document.createElement('tr');
      let th1 = document.createElement('th');
      let th2 = document.createElement('th');
      let th3 = document.createElement('th');
      let th4 = document.createElement('th');

      th1.innerHTML='Movie name';
      th2.innerHTML='Movie img';
      th3.innerHTML='Movie relase ';
      th4.innerHTML='remove movie';

      table.appendChild(row);
      row.appendChild(th1);
      row.appendChild(th2);
      row.appendChild(th3);
      row.appendChild(th4);

      for(let i = 0 ;i<moviearr.length;i++){
     
  
        let rownew = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
  
        td1.innerHTML=moviearr[i].name;
        td2.innerHTML=moviearr[i].imge;
        td3.innerHTML=moviearr[i].release;
        td4.innerHTML='X';
  
        table.appendChild(rownew);
        rownew.appendChild(td1);
        rownew.appendChild(td2);
        rownew.appendChild(td3);
        rownew.appendChild(td4);

      }
}
table.addEventListener('click',removerow);
function removerow(event){

    event.preventDefault();
    let target = event.target.innerText;
    if(target== 'X'){
        let child = parseInt(event.target.parentElement.rowIndex);
        event.target.parentElement.remove();
        moviearr.splice(child,1);
        localStorage.lest = JSON.stringify(moviearr);
    }
}
render();