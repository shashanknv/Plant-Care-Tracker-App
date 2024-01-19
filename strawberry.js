function showWeekDetails(weekNumber) {
    var weekDescription = "";

    switch (weekNumber) {
        case 1:
            weekDescription = "Week 1: Planting and establishment of runners.Water consistently to encourage root development.- Apply a balanced fertilizer suitable for berries.";
            break;
        case 2:
            weekDescription = "Week 2: Continued runner and leaf growth.Mulch around plants to suppress weeds and retain moisture.- Monitor for pests and diseases.";
            break;
        case 3:
            weekDescription = "Week 3: Flowers start forming.Provide support for hanging varieties.- Water consistently, especially during flowering.";
            break;
        case 4:
            weekDescription = "Week 4: First berries may appear.Remove any damaged or diseased leaves.Adjust watering to ensure even fruit development.";
            break;
        default:
            weekDescription = "Hover over the weeks to see details.";
            break;
    }

    document.getElementById("week-description").innerHTML = weekDescription;
    document.getElementById("week-details").style.display = "block";
}