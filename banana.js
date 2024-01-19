function showWeekDetails(weekNumber) {
    var weekDescription = "";

    switch (weekNumber) {
        case 1:
            weekDescription = "Week 1: Planting and initial root establishment.Water regularly to keep the soil consistently moist.Apply a balanced fertilizer to support early growth.";
            break;
        case 2:
            weekDescription = "Week 2: Shoots and leaves growth intensifies.Ensure the plant receives adequate sunlight.- Mulch to conserve soil moisture.";
            break;
        case 3:
            weekDescription = "Week 3: - Continued leaf development.Regularly inspect for pests and diseases.Water deeply during hot and dry periods.";
            break;
        case 4:
            weekDescription = "Week 4: Maturing leaves and potential flowering.Apply potassium-rich fertilizer for flower and fruit development.Prune away any damaged or yellowing leaves.";
            break;
        default:
            weekDescription = "Hover over the weeks to see details.";
            break;
    }

    document.getElementById("week-description").innerHTML = weekDescription;
    document.getElementById("week-details").style.display = "block";
}