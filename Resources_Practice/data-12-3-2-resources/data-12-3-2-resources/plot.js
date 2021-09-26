const url = "https://api.spacexdata.com/v2/launchpads";

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


//Given the following object, use Object.entries() to print each key-value pair inside an array
//Object.entries() method returns key-value pairs of an object as arrays
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};
console.log(Object.entries(researcher1));

//The forEach() method allows access to each element of an array.
researcher2 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];
researcher2.forEach(([key, value]) => console.log(key
    + ": " + value));

//Using Object.entries() and forEach(), print all metadata of the first person in the samples.json() data
//ID 940
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});