const inputVal=document.querySelector('.forminput');

var ul=document.getElementById('final');


document.querySelector('.add').addEventListener('click',function(e){
  if(inputVal.value ===""){
    window.alert("add a task");
  }
else{
var list=document.createElement('li');
list.className="delItem d-flex justify-content-md-between my-4";
var createdPara=document.createElement("p");
list.appendChild(createdPara);
var createdBtn=document.createElement('button');
createdBtn.setAttribute('type','button');
createdBtn.className="btn btn-primary";
createdBtn.appendChild(document.createTextNode('X'));
list.appendChild(createdBtn);
createdPara.appendChild(document.createTextNode(inputVal.value));
ul.appendChild(list);

// localtasks(inputVal.value);
//Local Storage Function


}

inputVal.value="";
e.preventDefault();
});

document.querySelector('ul#final').addEventListener('click',function(e){


if(e.target.className=='btn btn-primary'){
  e.target.parentElement.remove();
}


e.preventDefault();
})




// function localtasks(task){
//   let todo;

//   if(localStorage.getItem('todo')=== null){
//    todo=[];
//   }
//   else{
//   todo=JSON.parse(localStorage.getItem('tasks'));
// }
// //Errror is being showed here
// todo.push(task);
// console.log(task);
// console.log(todo);



// localStorage.setItem('todo',JSON.stringify(todo)); 


// }