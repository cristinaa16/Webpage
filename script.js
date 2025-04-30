document.addEventListener("DOMContentLoaded", function () {
  fetch("collection.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("collection");
      data.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = `
          <h2>${item["Dog breed"]}</h2>
          <p>${item.description}</p>
          <a href="item.html?id=${item.id}">View More</a>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => console.error("Error loading JSON:", error));
});
