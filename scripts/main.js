import { series } from "./data.js";
var seriesTbody = document.getElementById('Series');
var avgTbody = document.getElementById('avgSeasons');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.platform, "</td>\n                           <td>").concat(c.seasonsNumber, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var avgSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) {
        totalSeries = totalSeries + 1;
        avgSeasons = avgSeasons + serie.seasonsNumber;
    });
    return avgSeasons / totalSeries;
}
window.addEventListener("load", function () {
    renderSeriesInTable(series);
    var avgSeasons = getAvgSeasons(series);
    var pElement = document.createElement('p');
    var description = "Seasons average: ";
    pElement.innerHTML = description + avgSeasons;
    avgTbody.appendChild(pElement);
});
