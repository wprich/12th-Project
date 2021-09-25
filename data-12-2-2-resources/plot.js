//Show cities in the console log after inspecting webpage
console.log(cityGrowths);

//Sorts the cities based on their growth 
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

//Selects the top five cities from the previous sort method
var topFiveCities = sortedCities.slice(0,5);

//Shows the top five cities in terms of their growth from 2016
//If parseInt is not called, the values will return as a string instead of int
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths)

//Creates a bar chart with the above variables Names as x axis and Growths as y axis
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);


//Use the same dataset to create a bar chart of the seven largest cities by population
var popSort = cityGrowths.sort((a,b) => a.population - b.population).reverse();
var topSevenCities = popSort.slice(0,7);
var topSevenCitiesNames = topSevenCities.map(city => city.City);
var topSevenCitiesPop = topSevenCities.map(city => parseInt(city.population));
console.log(topSevenCitiesPop)

var trace = {
    x: topSevenCitiesNames,
    y: topSevenCitiesPop,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Populated Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);