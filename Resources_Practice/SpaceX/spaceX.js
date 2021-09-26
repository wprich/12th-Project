//URL for spaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json() method places a call to SpaceX's API, retrieves data, and prints in browser console
d3.json(url).then(receivedData => console.log(receivedData));

//This will give us details on only the first element returned from the above array
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

//This will retrieve the full_name of the element in the above array
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

//How would we retrieve the latitude of the same element as above from the array?
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

//Use the map function to print on the lat. and long. coord. of each SpaceX launch station.
