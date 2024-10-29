function createMap() {
    var map = L.map('map').setView([38.0, -98.5795], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const newArr = []
    const newArr2 = []
    for (let i = 0; i < 3; i++) {
        newArr.push(getRandomInRange(30, 35, 3))
        newArr2.push(getRandomInRange(-90, -100, 3))
    }

    var marker = L.marker([newArr[0], newArr2[0]]).addTo(map);
    var marker1 = L.marker([newArr[1], newArr2[1]]).addTo(map);
    var marker2 = L.marker([newArr[2], newArr2[2]]).addTo(map);


    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${newArr[0]}&longitude=${newArr2[0]}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            const locality = data.locality
            //console.log(locality)
            document.getElementById("imp").innerHTML = `Marker 1: Latituide: ${newArr[0]}, Longitude: ${newArr2[0]}`;
            document.getElementById("nex").innerHTML = `Locality: ${locality}`;
        });

    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${newArr[1]}&longitude=${newArr2[1]}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            const locality = data.locality
            //console.log(locality)
            document.getElementById("imp1").innerHTML = `Marker 2: Latituide: ${newArr[1]}, Longitude: ${newArr2[1]}`;
            document.getElementById("nex1").innerHTML = `Locality: ${locality}`;
        });

    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${newArr[2]}&longitude=${newArr2[2]}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            const locality = data.locality
            //console.log(locality)
            document.getElementById("imp2").innerHTML = `Marker 3: Latituide: ${newArr[2]}, Longitude: ${newArr2[2]}`;
            document.getElementById("nex2").innerHTML = `Locality: ${locality}`;
        });

}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}


window.onload = createMap;