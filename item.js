document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get("id");

  fetch("collection.json")
    .then((response) => response.json())
    .then((data) => {
      const item = data.find((breed) => breed.id === itemId);

      if (item) {
        document.getElementById("page-title").innerText = item["Dog breed"];
        document.getElementById("item-title").innerText = item["Dog breed"];
        document.getElementById("item-image").src = "images/" + item.image;
        document.getElementById("item-description").innerText = item.Description;
        document.getElementById("item-akc").innerText = item["AKC group"];
        document.getElementById("item-size").innerText = item.Size;
        document.getElementById("item-temperament").innerText = item.Temperament;
        document.getElementById("item-lifespan").innerText = item["Average lifespan"];
        document.getElementById("item-shedding").innerText = item["Shedding level"];
        document.getElementById("item-exercise").innerText = item["Exercise needs"];
        document.getElementById("item-trainability").innerText = item.Trainability;
        document.getElementById("item-apartments").innerText = item["Good for apartments"];
        document.getElementById("item-hypoallergenic").innerText = item.Hypoallergenic;

        // Add schema.org JSON-LD metadata to the page
        const jsonLd = {
          "@context": "https://schema.org",
          "@type": "Thing",
          "name": item["Dog breed"],
          "image": item.image,
          "description": item.description,
          "additionalProperty": [
            { "@type": "PropertyValue", "name": "AKC group", "value": item["AKC group"] },
            { "@type": "PropertyValue", "name": "Size", "value": item.Size },
            { "@type": "PropertyValue", "name": "Temperament", "value": item.Temperament },
            { "@type": "PropertyValue", "name": "Average lifespan", "value": item["Average lifespan"] },
            { "@type": "PropertyValue", "name": "Shedding level", "value": item["Shedding level"] },
            { "@type": "PropertyValue", "name": "Exercise needs", "value": item["Exercise needs"] },
            { "@type": "PropertyValue", "name": "Trainability", "value": item.Trainability },
            { "@type": "PropertyValue", "name": "Good for apartments", "value": item["Good for apartments"] },
            { "@type": "PropertyValue", "name": "Hypoallergenic", "value": item.Hypoallergenic }
          ]
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      } else {
        document.body.innerHTML = "<h2>Breed not found.</h2>";
      }
    })
    .catch((error) => console.error("Error loading data:", error));
});
