function clicked(){
   if(document.getElementById('val').value!==''){
   
    var newLi=document.createElement('li');
    newLi.className='list-item';
    
    const text=document.createTextNode(document.getElementById('val').value);
    newLi.appendChild(text);
    
    const par=document.querySelector('.task-list'); 
    par.appendChild(newLi);
    
  document.getElementById('val').value='';

  var lin=document.createElement('a');
  lin.href='#'
  lin.className='item-link';
  var remove=document.createElement('i');
  remove.className='fa fa-remove';
  lin.appendChild(remove);
  newLi.appendChild(lin);
   }
   else{
    alert('enter task name ');
   }

      
}


var btn=document.querySelector('.bton');
btn.addEventListener('click',clicked);

// remove child

const ulList=document.querySelector('.task-list');

ulList.addEventListener('click',deleting);
function deleting(e){
  if(e.target.parentElement.classList.contains('item-link')){
   if( confirm('are you sure?')){
    e.target.parentElement.parentElement.remove();
    }
  }
}
