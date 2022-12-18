const firstName = ['Ahmet CAN', 'Mehmet DEMIR', 'Okkes ANKARA', 'Ali CARIK', 'Ayse SAYAR',"Fatma KAPLAN"];

const getPersonName =()=>{

const container = document.getElementById("main");
console.log(container)
const liList= firstName.map((person,i)=>{
    const fName=person.split(" ")[0]
    const lName=person.split(" ")[1]
    return `<tr> <td>  </td> <td>${lName},${fName} </td></tr>
            <tr> <td> ${i} </td> <td> ${person} </td></tr>`
}).join("")

container.innerHTML=`
<table border=1>${liList}</table>
`

}

getPersonName(firstName)