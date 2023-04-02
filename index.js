fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = JSON.stringify(data);
  })
  .catch(error => console.error(error));
