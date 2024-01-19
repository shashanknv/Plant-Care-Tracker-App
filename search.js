function viewPlantDetails() {
    var selectedPlant = document.getElementById("plantSelect").value;
    var plantNameElement = document.getElementById("plant-name");
    var plantDescriptionElement = document.getElementById("plant-description");

    // Update details based on the selected plant
    switch (selectedPlant) {
        case "rose":
            plantNameElement.innerText = "Rose";
            plantDescriptionElement.innerText = "Roses are one of the most beloved and timeless flowers, known for their beauty and fragrance.";
            break;
        case "jasmine":
            plantNameElement.innerText = "Jasmine";
            plantDescriptionElement.innerText = "Jasmine is a fragrant flowering plant known for its beautiful and aromatic white flowers.";
            break;
        case "hibiscus":
            plantNameElement.innerText = "Hibiscus";
            plantDescriptionElement.innerText = "Hibiscus plants are known for their vibrant and large flowers, available in various colors.";
            break;
        case "banana":
            plantNameElement.innerText = "Banana";
            plantDescriptionElement.innerText = "Banana plants produce delicious and nutritious fruits, typically grown in tropical regions.";
            break;
        case "apple":
            plantNameElement.innerText = "Apple";
            plantDescriptionElement.innerText = "Apple trees bear a variety of crisp and sweet fruits, making them a popular choice in orchards.";
            break;
        case "strawberry":
            plantNameElement.innerText = "Strawberry";
            plantDescriptionElement.innerText = "Strawberries are delicious red berries often grown in gardens and used in various culinary delights.";
            break;
        default:
            plantNameElement.innerText = "Plant Name";
            plantDescriptionElement.innerText = "Select a plant from the dropdown menu to view details.";
            break;
    }

    // Display the plant details section
    document.getElementById("plant-details").style.display = "block";
}