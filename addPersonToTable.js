const firstName = ['Ahmet CAN', 'Mehmet DEMIR', 'Okkes ANKARA', 'Ali CARIK', 'Ayse SAYAR',"Fatma KAPLAN"];

const getPersonName =()=>{

const container = document.getElementById("main");
console.log(container)
const liList= firstName.map(person=>{
    return `<tr> <td> ${person} </td> </tr>`
}).join("")

container.innerHTML=`
<table>${liList}</table>
`

}

getPersonName(firstName)