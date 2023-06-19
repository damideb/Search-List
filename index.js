var input = document.querySelector('.search')
var wordText = document.querySelector('.text')

var nodeList = document.querySelectorAll('.list');
const usersInfo = document.getElementById('result')


users= []

function searchList(search){
    let found=false
    for(i=0; i<users.length; i++){
        if(users[i].innerText.toLowerCase().includes(search)){
            users[i].classList.remove('hide')
            found=true
            
        }
        else{
            users[i].classList.add('hide')
           
        }

       
      
    }
    if(!found){
  
        wordText.style.display=' block'
    }
    
}

input.addEventListener('input', (e)=> searchList(e.target.value) )




function getList(){
     fetch('https://randomuser.me/api?results=15')
    .then((res)=> res.json())
      .then((data)=>{
      const results = data.results;
      usersInfo.innerHTML=""
  results.forEach(user => {
    const li = document.createElement('li')
users.push(li)
    li.innerHTML = `<img  src='${user.picture.large}' alt='${user.name.first}' />
                    <h5> ${user.name.first} ${user.name.last} </h5> `

                    usersInfo.appendChild(li)

  });

}
      
      
      
      
      )}

      getList();