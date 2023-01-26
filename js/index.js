
 //Play My Music
 function playMyMusic1(){
  var audio = document.getElementById("myMusic");
  audio.play();
  console.log('play')
 }


//Play /Puase Music
var myAudio = document.getElementById("myMusic");
var myText = document.getElementById("myText");

var isPlaying = false;

function playMyMusic() {
  if(isPlaying){
    myAudio.pause();
    myText.innerHTML= 'Play Song'
  }
  else{
    myAudio.play()
    myText.innerHTML= 'Pause Song'
  }
}

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

//Play Music on each button
var music1 = document.getElementById("music1");
var music2 = document.getElementById("music2");
var music3 = document.getElementById("music3");
var music4 = document.getElementById("music4");
var music5 = document.getElementById("music5");
var music6 = document.getElementById("music6");
var music7 = document.getElementById("music7");
var music8 = document.getElementById("music8");
var music9 = document.getElementById("music9");
var music10 = document.getElementById("music10");
var music11 = document.getElementById("music11");
var music12 = document.getElementById("music12");
var music13 = document.getElementById("music13");
var music14 = document.getElementById("music14");
var music15 = document.getElementById("music15");
var music16 = document.getElementById("music16");
var music17 = document.getElementById("music17");

let isMusic1 = false;
let isMusic2 = false;
let isMusic3 = false;
let isMusic4 = false;
let isMusic5 = false;
let isMusic6 = false;
let isMusic7 = false;
let isMusic8 = false;
let isMusic9 = false;
let isMusic10 = false;
let isMusic11 = false;
let isMusic12 = false;
let isMusic13 = false;
let isMusic14 = false;
let isMusic15 = false;
let isMusic16 = false;
let isMusic17 = false;



function Play1(){ 
  if(isMusic1){
    music1.pause();
  }
  else{
    music1.play();
    music2.pause();   
  }
 }

music1.onplaying = function() {
  isMusic1 = true;
};
music1.onpause = function() {
  isMusic1 = false;
};

function Play2(){ 
  if(isMusic2){
    music2.pause();
  }
  else{
    music2.play();
    music1.pause();
  }
 }

music2.onplaying = function() {
  isMusic2 = true;
};
music2.onpause = function() {
  isMusic2 = false;
};

function Play3(){ 
  if(isMusic3){
    music3.pause();
  }
  else{
    music3.play();
    music2.pause();
    music1.pause();
  }
 }

music3.onplaying = function() {
  isMusic3 = true;
};
music3.onpause = function() {
  isMusic3 = false;
};

function Play4(){ 
  if(isMusic4){
    music4.pause();
  }
  else{
    music4.play();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music4.onplaying = function() {
  isMusic4 = true;
};
music4.onpause = function() {
  isMusic4 = false;
};

function Play5(){ 
  if(isMusic5){
    music5.pause();
  }
  else{
    music5.play();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music5.onplaying = function() {
  isMusic5 = true;
};
music5.onpause = function() {
  isMusic5 = false;
};

function Play6(){ 
  if(isMusic6){
    music6.pause();
  }
  else{
    music6.play();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music6.onplaying = function() {
  isMusic6 = true;
};
music6.onpause = function() {
  isMusic6 = false;
};

function Play7(){ 
  if(isMusic7){
    music7.pause();
  }
  else{
    music7.play();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music7.onplaying = function() {
  isMusic7 = true;
};
music7.onpause = function() {
  isMusic7 = false;
};

function Play8(){ 
  if(isMusic8){
    music8.pause();
  }
  else{
    music8.play();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music8.onplaying = function() {
  isMusic8 = true;
};
music8.onpause = function() {
  isMusic8 = false;
};

function Play9(){ 
  if(isMusic9){
    music9.pause();
  }
  else{
    music9.play();
    music8.pause();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music9.onplaying = function() {
  isMusic9 = true;
};
music9.onpause = function() {
  isMusic9 = false;
};

function Play10(){ 
  if(isMusic10){
    music10.pause();
  }
  else{
    music10.play();
    music9.pause();
    music8.pause();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music10.onplaying = function() {
  isMusic10 = true;
};
music10.onpause = function() {
  isMusic10 = false;
};
function Play11(){ 
  if(isMusic11){
    music11.pause();
  }
  else{
    music11.play();
    music10.pause();
    music9.pause();
    music8.pause();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music11.onplaying = function() {
  isMusic11 = true;
};
music11.onpause = function() {
  isMusic11 = false;
};

function Play12(){ 
  if(isMusic12){
    music12.pause();
  }
  else{
    music12.play();
    music11.pause();
    music10.pause();
    music9.pause();
    music8.pause();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music12.onplaying = function() {
  isMusic12 = true;
};
music12.onpause = function() {
  isMusic12 = false;
};

function Play13(){ 
  if(isMusic13){
    music13.pause();
  }
  else{
    music13.play();
    music12.pause();
    music11.pause();
    music10.pause();
    music9.pause();
    music8.pause();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music13.onplaying = function() {
  isMusic13 = true;
};
music13.onpause = function() {
  isMusic13 = false;
};

function Play14(){ 
  if(isMusic14){
    music14.pause();
  }
  else{
    music14.play();
    music13.pause();
    music12.pause();
    music11.pause();
    music10.pause();
    music9.pause();
    music8.pause();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music14.onplaying = function() {
  isMusic14 = true;
};
music14.onpause = function() {
  isMusic14 = false;
};

function Play15(){ 
  if(isMusic15){
    music15.pause();
  }
  else{
    music15.play();
    music14.pause();
    music13.pause();
    music12.pause();
    music11.pause();
    music10.pause();
    music9.pause();
    music8.pause();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music15.onplaying = function() {
  isMusic15 = true;
};
music15.onpause = function() {
  isMusic15 = false;
};

function Play16(){ 
  if(isMusic16){
    music16.pause();
  }
  else{
    music16.play();
    music15.pause();
    music14.pause();
    music13.pause();
    music12.pause();
    music11.pause();
    music10.pause();
    music9.pause();
    music8.pause();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music17.onplaying = function() {
  isMusic17 = true;
};
music17.onpause = function() {
  isMusic17 = false;
};

function Play17(){ 
  if(isMusic17){
    music17.pause();
  }
  else{
    music17.play();
    music16.pause();
    music15.pause();
    music14.pause();
    music13.pause();
    music12.pause();
    music11.pause();
    music10.pause();
    music9.pause();
    music8.pause();
    music7.pause();
    music6.pause();
    music5.pause();
    music4.pause();
    music3.pause();
    music2.pause();
    music1.pause();
  }
 }

music17.onplaying = function() {
  isMusic17 = true;
};
music17.onpause = function() {
  isMusic17 = false;
};



