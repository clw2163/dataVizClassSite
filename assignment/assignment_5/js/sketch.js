// **** Global Variables ***** //
var apiKey = 'c2773b122b02c476524a2985262546a0';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var weatherData;
var button;
var cityInput;
var description = '';
var temperature = 0;
var humidity = 0;
var pressure = 0;
var icon = '';
var img;  // Declare variable 'img'.

// **** Setup Function ****** //
function setup(){
  createCanvas(410, 610);
  button = select('#submit');
  cityInput = select('#city');
  button.mousePressed(queryAPI);
  img = loadImage("../../img/sun.jpg");  // Load the image
  img2 = loadImage("../../img/partlysun.jpg"); 
  img3 = loadImage("../../img/scatteredclouds.jpg"); 
  img4 = loadImage("../../img/brokenclouds.jpg"); 
  img5 = loadImage("../../img/rain.jpg"); 
  img6 = loadImage("../../img/snow.jpg"); 
  img7 = loadImage("../../img/thunder.jpg"); 
  img8 = loadImage("../../img/mist.jpg"); 
  img9 = loadImage("../../img/temperature.jpg"); 
  noLoop();
}

// **** Query API Function *** //
function queryAPI(){
  var request = baseURL + cityInput.value() + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  description = weatherData.weather[0].main;
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  pressure = weatherData.main.pressure;
  wind = weatherData.wind.speed;
  tempmin = weatherData.main.temp_min;
  tempmax = weatherData.main.temp_max;
  icon = weatherData.weather[0].icon;
  print(weatherData);
  redraw();
}

// **** Draw Function **** //
function draw(){
  background(255);
  if (icon == '01d' ){
    // Displays the image at its actual size at point (0,0)
    image(img, 0, 0);
    // Displays the image at point (0, height/2) at half size
    image(img, 110, height/2.25, img.width/10, img.height/10);
  }
  else if (icon == '02d'){
    image(img2, 0, 0);
    image(img2, 110, height/2.25, img2.width/10, img2.height/10);
  }
  else if (icon == '03d'){
    image(img3, 0, 0);
    image(img3, 110, height/2.25, img3.width/10, img3.height/10);
  }
  else if (description == 'clouds'){
    image(img4, 0, 0);
    image(img4, 110, height/2.25, img4.width/10, img4.height/10);
  }
  else if (icon == '04d'){
    image(img4, 0, 0);
    image(img4, 110, height/2.25, img4.width/10, img4.height/10);
  }
   else if (icon == '09d'){
    image(img5, 0, 0);
    image(img5, 110, height/2.25, img5.width/10, img5.height/10);
  }
  else if (icon == '10d'){
    image(img5, 0, 0);
    image(img5, 110, height/2.25, img5.width/10, img5.height/10);
  }
  else if (description == 'rain'){
    image(img5, 0, 0);
    image(img5, 110, height/2.25, img5.width/10, img5.height/10);
  }
  else if (icon == '13d'){
    image(img6, 0, 0);
    image(img6, 110, height/2.25, img6.width/10, img6.height/10);
  }
  else if (icon == '11d'){
    image(img7, 0, 0);
    image(img7, 110, height/2.25, img7.width/10, img7.height/10);
  }
  else if (icon == '50d'){
    image(img8, 0, 0);
    image(img8, 110, height/2.25, img8.width/10, img8.height/10);
  }
  else if (description == 'mist'){
    image(img8, 0, 0);
    image(img8, 110, height/2.25, img8.width/10, img8.height/10);
  }
  else {
    image(img4, 0, 0);
    image(img4, 110, height/2.25, img4.width/10, img4.height/10);
  }
  if (weatherData){
    fill(0);
    noStroke();
    var tempF = Math.round((temperature * (9/5)) - 459.67);
    var min = Math.round((tempmin * (9/5)) - 459.67);
    var max = Math.round((tempmax * (9/5)) - 459.67);
    textAlign(CENTER);
    textSize(16);
    textFont('Arial');
    text(cityInput.value().toUpperCase(0), 200, 100);
    textAlign(CENTER);
    textSize(16);
    textFont('Arial');
    text(description.toUpperCase(0), 200, 130);
    textAlign(CENTER);
    textSize(80);
    textFont('Arial');
    text(tempF + ' F', 200, 280);
    stroke(0);
    strokeWeight(1);
    line(20, 520, 380, 520);
    noStroke();
    textAlign(LEFT);
    textSize(10);
    textFont('Arial');
    text(min + 'F / ' + max + 'F', 20, 550);
    text(wind + ' MPH WIND', 20, 565);
    text(humidity + '% HUMIDITY', 20, 580);
  noFill();
  stroke(0);
  strokeWeight(1);
  rect(0,0,400,600);
  }
  




//if (neighborhood == 'Chinatown'){
  //      fill (130, 130, 130, 90);
    //  }
      //else if (neighborhood == 'Battery Park City') {
        //fill (70, 178, 157, 90);
      //}





}