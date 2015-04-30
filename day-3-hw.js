//swap two values in an array
var swap = function (arr, indexOne, indexTwo) {
    var indexTemp;
    arr[indexTemp] = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = arr[indexTemp];
  return arr;
};

//generate a random number
var getRand = function (low, high) {
    var random = Math.floor(Math.random() * high + low);
    var randNum = random;
  return randNum;
};

//create specified number of random numbers from 1 to 100 in an array
var randArr = function (size) {
    var random;
    var arr = [];
    for (i=0; i<size; i++){
         random = Math.floor(Math.random() * 100);
        arr.push(random);
    }
  return arr; 
}

//find the max number in an array
var getMax = function (arr) {
    arr.sort(function(a, b) {
        return a - b;
            }).reverse();
    return arr[0];
}

//Get Body tag and set opacity to .5
document.querySelector("body").style.opacity = ".5";

//Get all image tags
var kittenPaint = function(){
var images = document.querySelectorAll("img");

  for (var i=0; i<images.length; i++){
    images[i].src = "http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg"
  }
}

//Iterate through elements and change to have background image
var elm = document.querySelectorAll("*");

var kittenBomb = function(){
  var elm = document.querySelectorAll("*");
  for (var i=0; i<elm.length; i++){
    elm[i].style.backgroundImage = "url(http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg)"
  }
}

//Rotate Body on click
var getBod = document.querySelector("body")

var rotateBod = function(event){
  event.preventDefault();  
  getBod.style.transform = "rotateZ(60deg)";
}

getBod.onclick = rotateBod;

//Rotate imgs on click of body
var rotateImages = function(event){
  event.preventDefault();  
  images.style.transform = "rotateZ(60deg)";
}

getBod.onclick = rotateImages;



