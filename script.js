//variables
let degrees = ["12° C", "14° C", "16° C", "18° C", "20°C", "22° C", "24° C", "26° C"];
let weatherType = ["sunny", "cloudy", "mostly sunny", "mostly cloudy", "scattered showers", "showers", "storm", "electrical storm"];
let humidity = ["100%", "95%", "90%", "85%", "80%", "75%", "70%", "60%"];

//Pick a random 0-7 number
let pick = () => {
    return Math.floor(Math.random() * 8);
};

//Function that create an selector (degrees, weatherType, humidity) with a random element of each selector (degrees, weatherType, humidity)
let selector = (d, w, h) => {
    let selected = [];
    selected.push(d[pick()]);
    selected.push(w[pick()]);
    selected.push(h[pick()]);
    return selected;
};

// Function that create the final random weather prediction
const prediction = (arr) => {
    return `Today it's gonna be ${selector(degrees, weatherType, humidity)[1]}! With ${selector(degrees, weatherType, humidity)[0]} and a humidity of ${selector(degrees, weatherType, humidity)[2]}`;
};

console.log(prediction(selector(degrees, weatherType, humidity)));
