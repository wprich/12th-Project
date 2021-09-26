//const url = "https://api.spacexdata.com/v2/launchpads";

d3.json("samples.json").then(function(data){
    console.log(data);
});

//Extract the wfreq, or weekly belly button washing freq., of each person in the array.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

//Same info as last query, but sorted in descending order.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

//Delete null values from the sorted array in last step.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// All the code is enclosed inside the init() function, which is called on the last line.
// Insideinit(), the d3.select() method is used to select the dropdown menu, which has an id of--
// #selDataset. The dropdown menu is assigned to the variable selector.
// The d3.json() method is used to read the data from samples.json. 
// The data from the entire JSON file is assigned the (arbitrary) argument name data.
// Inside the data object, the names array, as seen from console.log(data), contains the ID numbers-- 
// of all the study participants. The variable sampleNames is assigned to this array.
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

//Adding the optionChanged() fct that is used the index.html file to our js file
//Not used in js file but is used in html file to print selection into console
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }


//buildMetaData function used in the optionChanged fct
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text("ID: " + result.id);
      PANEL.append("h6").text("Ethnicity: " + result.ethnicity);
      PANEL.append("h6").text("Gender: " + result.gender);
      PANEL.append("h6").text("Age: " + result.age);
      PANEL.append("h6").text("Location: " + result.location);
      PANEL.append("h6").text("BBType: " + result.bbtype);
      PANEL.append("h6").text("W-Freq: " + result.wfreq);
    });
  }