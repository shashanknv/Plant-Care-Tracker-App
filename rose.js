function showWeekDetails(weekNumber) {
    var weekDescription = "";

    switch (weekNumber) {
        case 1:
            weekDescription = "Week 1: Rose buds are starting to form. Keep the soil consistently moist.";
            break;
        case 2:
            weekDescription = "Week 2: Buds are growing. Provide a balanced fertilizer to support growth.";
            break;
        case 3:
            weekDescription = "Week 3: Blooms are opening. Ensure the plant receives adequate sunlight.";
            break;
        case 4:
            weekDescription = "Week 4: Full bloom! Continue regular care and enjoy the beauty of your roses.";
            break;
        default:
            weekDescription = "Hover over the weeks to see details.";
            break;
    }

    document.getElementById("week-description").innerHTML = weekDescription;
    document.getElementById("week-details").style.display = "block";
}