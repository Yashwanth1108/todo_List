const todolist = document.getElementById('todolist');
const btn = document.getElementById('btn');
const ulTag = document.getElementById('ulTag');
var edittext = "";



var todoArray = [];

btn.addEventListener('click',()=>{
    var todadata = todolist.value;

    var todoObject = {
        taskId: todoArray.length + 1,
        taskName: todadata
    }
    todoArray.push(todoObject);
    todolist.value = " ";
    reanderTask()
   
})

function reanderTask(){

    ulTag.innerHTML = "";
    console.log(todoArray);
    for (let i = 0; i < todoArray.length; i++) {
        
        var li = document.createElement('li');
        li.classList.add('task')
        li.append(todoArray[i].taskName)
    
       let deleteEle = document.createElement('button');
       deleteEle.value = todoArray[i].taskId;
       deleteEle.taskId = todoArray[i].taskId;
       deleteEle.innerText = "delete";
       deleteEle.classList.add('deleteId')
       deleteEle.addEventListener('click',deleteItem)

       let editEle = document.createElement("button")
       editEle.innerText = "edit";
       editEle.taskId = todoArray[i].taskId;
       editEle.edittext = todoArray[i].taskName;
       editEle.addEventListener('click',editItem)





        ulTag.appendChild(li);
        ulTag.appendChild(editEle);
        ulTag.appendChild(deleteEle);

    }
    
}

function deleteItem(e) {
   e.preventDefault();
   console.log(e.target.taskId);

   var findindex = todoArray.findIndex(i => i.taskId === e.target.taskId);
   todoArray.splice(findindex,1);
   reanderTask()
    
}

function editItem(e){
    e.preventDefault();
    var editelemrnt = todoArray.findIndex(i => i.taskId === e.target.taskId);
    todoArray.splice(editelemrnt,1);
    todolist.value = e.target.edittext;
    reanderTask()


}