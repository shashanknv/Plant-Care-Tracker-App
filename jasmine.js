function showWeekDetails(weekNumber) {
    var weekDescription = "";

    switch (weekNumber) {
        case 1:
            weekDescription = "Week 1: Planting and establishment phase.Ensure the soil is consistently moist.Provide a balanced fertilizer to support initial growth";
            break;
        case 2:
            weekDescription = "Week 2: - Root development continues.Monitor for any signs of pests or diseases.Continue regular watering and fertilization.";
            break;
        case 3:
            weekDescription = "Week 3: Early shoots and leaves growth.Mulch around the base to retain soil moisture.Prune any damaged or dead growth.";
            break;
        case 4:
            weekDescription = "Week 4: Continued shoot and leaf development.Support climbing varieties with a trellis.Regularly inspect for pests and diseases.";
            break;
        default:
            weekDescription = "Hover over the weeks to see details.";
            break;
    }

    document.getElementById("week-description").innerHTML = weekDescription;
    document.getElementById("week-details").style.display = "block";
}