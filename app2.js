const people = ['Ahmet', 'Mehmet', 'Okkes', 'Ali', 'Ayse',"Fatma"];

const renderPeople = (pPeople) => {
  const container = document.getElementById('main');

  const liList = pPeople
    .map((person) => {
      return `
            <li>${person}</li>
        `;
    })
    .join('');

  container.innerHTML = `
  <ul>${liList}</ul>
  
  `;
};

renderPeople(people);
