function showWeekDetails(weekNumber) {
    var weekDescription = "";

    switch (weekNumber) {
        case 1:
            weekDescription = "Week 1: Initial planting and establishment.Water deeply to encourage root growth.Apply a balanced fertilizer for young plants.";
            break;
        case 2:
            weekDescription = "Week 2: Shoot and leaf development.Mulch around the base for moisture retention.Monitor for signs of pests and diseases.";
            break;
        case 3:
            weekDescription = "Week 3: Continued leaf growth.Prune for shape and remove any diseased or dead branches.Water consistently, especially during dry periods.";
            break;
        case 4:
            weekDescription = "Week 4: Potential flower bud development.Apply a balanced fertilizer for flowering and fruiting.- Thin out excess fruit if necessary.";
            break;
        default:
            weekDescription = "Hover over the weeks to see details.";
            break;
    }

    document.getElementById("week-description").innerHTML = weekDescription;
    document.getElementById("week-details").style.display = "block";
}