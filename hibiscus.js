function showWeekDetails(weekNumber) {
    var weekDescription = "";

    switch (weekNumber) {
        case 1:
            weekDescription = "Week 1: Initial planting and establishment.Water deeply to encourage root development.- Apply a balanced fertilizer to promote early growth.";
            break;
        case 2:
            weekDescription = "Week 2: Vigorous growth of leaves and stems.Prune to shape the plant if necessary.- Continue regular watering and fertilization.";
            break;
        case 3:
            weekDescription = "Week 3: Buds start forming for future blooms.Deadhead spent flowers to encourage more blooms.Watch for signs of pests and diseases.";
            break;
        case 4:
            weekDescription = "Week 4: First blooms may appear.Provide support for tall varieties.Mulch to retain soil moisture and suppress weeds.";
            break;
        default:
            weekDescription = "Hover over the weeks to see details.";
            break;
    }

    document.getElementById("week-description").innerHTML = weekDescription;
    document.getElementById("week-details").style.display = "block";
}