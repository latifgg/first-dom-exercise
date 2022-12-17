// const inputEl = document.getElementById("input")
// const input2El = document.getElementById("input2")
// const btnEl = document.getElementById("btn")
// const prgEl = document.getElementById("prg")

// const password="12345"
// const username="hicoders"

// btnEl.addEventListener("click", checkUserInfo)


// function checkUserInfo(){
//     if (inputEl.value ==username && input2El.value==password) {
//         prgEl.innerHTML=" basarili "
//     }else{
//         prgEl.innerHTML="yanlis giris yaptiniz"
//     }
// }

const people = ['Ahmet', 'Mehmet', 'Okkes', 'Ali'];

const renderPeople = (pPeople) => {

 let ul=document.createElement('ul');
    for(i=0;i<pPeople.length;i++)
    {
        let li=document.createElement('li');
        li.innerHTML=pPeople[i];
        ul.appendChild(li);
        
    }
    document.getElementById('main').appendChild(ul);
}



renderPeople(people);



