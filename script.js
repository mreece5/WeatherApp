// Called each time User clicks Fahrenheit or Celsius Radio Buttons
function convertTemp() {
	let tempInput = document.getElementById("temp");
	let actualTemp = parseFloat(tempInput.value);
	// Convert Fahrenheit to Celsius
	if (document.getElementById('fah').checked){
		console.log("Converting from Fahrenheit to Celsius");
		actualTemp = (actualTemp * (9/5)) + 32;
	}
	// Convert Celsius to Fahrenheit
	if (document.getElementById('cel').checked){
		console.log("Converting from Celsius to Fahrenheit");
		actualTemp = (actualTemp - 32) * (5/9);
	}
	// Round to nearest hundreths place
	tempInput.value = Number.parseFloat(actualTemp).toFixed(2);
}

// Called when search button is clicked
const apiCall = async () => {
  let search = document.getElementById("search").value;
  console.log("Search: " + search);
  console.log("https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=b3475d975d3f2ee12ddb585b6bbefdca");
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + search + '&appid=b3475d975d3f2ee12ddb585b6bbefdca');
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
  console.log("Temperature: " + myJson.main.temp);
  
  // Fill out properties
  convertKelvinToFahrenheit(myJson.main.temp);
  setHumidity(myJson.main.humidity);
  setPressure(myJson.main.pressure);
  setDescription(myJson.weather[0].description);
  setLatAndLon(myJson.coord.lat, myJson.coord.lon);
  setCountry(myJson.sys.country);
}

function convertKelvinToFahrenheit(k) {
	let f = (k - 273.15) * (9/5) + 32;
	let temp = document.getElementById("temp");
	// Round to nearest hundreths place
	temp.value = Number.parseFloat(f).toFixed(2);
	// Set Fahrenheit Radio button to Checked
	let fah = document.getElementById("fah");
	fah.checked = true;
}

function setHumidity(humidity) {
	let humidityInput = document.getElementById("humidity");
	humidityInput.value = humidity;
}

function setPressure(pressure) {
	let pressureInput = document.getElementById("pressure");
	pressureInput.value = pressure;
}

function setDescription(description) {
	let descriptionInput = document.getElementById("description");
	descriptionInput.value = description;
}

function setLatAndLon(lat, lon) {
	let latInput = document.getElementById("lat");
	let lonInput = document.getElementById("lon");
	latInput.value = lat;
	lonInput.value = lon;
}

function setCountry(country) {
	let countryInput = document.getElementById("country");
	countryInput.value = country;
}