/* eslint-disable no-inner-declarations */
'use strict';

function movie(remove='x' ,name,category, release){
  this.remove=remove;
  this.name = name;
  this.category = category;
  this.release = release;

  movie.all.push(this);
}


movie.all = [];

getDAta();

let count =0;
let tableElement = document.getElementById('table');
movie.prototype.createMovieTable= function (){
  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);

  let tdElement1 = document.createElement('td');
  trElement.appendChild(tdElement1);
  let spanElement = document.createElement('span');
  tdElement1.appendChild(spanElement);
  spanElement.textContent = movie.all[count].remove;

  let tdElement2 = document.createElement('td');
  trElement.appendChild(tdElement2);
  tdElement2.textContent = movie.all[count].name;

  let tdElement3 = document.createElement('td');
  trElement.appendChild(tdElement3);
  let imgElement  = document.createElement('img');
  tdElement3.appendChild(imgElement);
  imgElement.src = movie.all[count].category;

  let tdElement4 = document.createElement('td');
  trElement.appendChild(tdElement4);
  tdElement4.textContent = movie.all[count].release;

  count++;
};


for(let i = 0 ; i< movie.all.length ;i++){
  movie.all[i].createMovieTable();
}


let formMovie= document.getElementById('formMovie');

formMovie.addEventListener('submit',createNewMovie);

function createNewMovie(e){
//   e.preventDefault();
  let remove = 'x';
  let name = e.target.name.value;
  let category = 'img/'+e.target.category.value + '.png';
  let release = e.target.release.value;

  let newMovie= new movie(remove,name,category ,release);

  newMovie.createMovieTable();

  localStorage.movies = JSON.stringify(movie.all);

}


function getDAta(){
  if(localStorage.movies){
    let newMovies = JSON.parse(localStorage.movies);

    for(let i = 0; i < newMovies.length ;i++){
      new movie(newMovies[i].remove,newMovies[i].name,newMovies[i].category,newMovies[i].release);
    }
  }
}



let btnClear  = document.getElementById('cleatBtn');
btnClear.onclick = clearData;

function clearData(){
  localStorage.clear();
  location.reload();
}


let btnRemoveItem = document.querySelectorAll('td span');


for (let i = 0; i < btnRemoveItem.length;i++){
  btnRemoveItem[i].addEventListener('click',removeItem);

  function removeItem(){

    tableElement.removeChild(btnRemoveItem[i].parentElement.parentElement);
    movie.all.splice(i,1);

    localStorage.movies = JSON.stringify(movie.all);

    location.reload();

  }
}


let trColor = document.querySelectorAll('tr');

for(let i =0; i< trColor.length; i++){
  if(i%2===0){
    trColor[i].style.backgroundColor = '#A2DBFA';
  }else{
    trColor[i].style.backgroundColor = '#77ACF1';
  }
}




