let gMaps = {
    "markers": [
      {
        "name": "Rixos The Palm Dubai",
        "position": [25.1212, 55.1535],
      },
      {
        "name": "Shangri-La Hotel",
        "location": [25.2084, 55.2719]
      },
      {
        "name": "Grand Hyatt",
        "location": [25.2285, 55.3273]
      }
    ]
  }
  
//   console.log(gMaps.markers[0]);
//   console.log(gMaps.markers[2].name);
// console.log(gMaps.markers[1].location[0]);
for (const maps of gMaps.markers) {
    console.log(maps);
    
}
for (const ariea of gMaps.markers[2].location) {
    console.log(ariea);
}
    