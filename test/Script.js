const tableBody = document.querySelector(".tableBody");
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((Data) => inTable(Data));

function inTable(Data) {
  console.log(Data);
  Data.map((element) => {
    tableBody.innerHTML += `
        <tr onclick = "rahul(${element.id})">
         <td>${element.id}</td>
         <td>${element.name}</td>
         <td>${element.email}</td>
         <td>${element.body}</td>
        </tr>
        `;
  });
}
function rahul(id) {
  console.log(id);
  fetch("https://jsonplaceholder.typicode.com/comments/" + id)
    .then((response) => response.json())
    .then(
      (Data) =>
        (tableBody.innerHTML = `
    <tr>
     <td>${Data.id}</td>
     <td>${Data.name}</td>
     <td>${Data.email}</td>
     <td>${Data.body}</td>
    </tr>
    `)
    );
}
