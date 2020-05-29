var up = document.getElementById('GFG_UP');

var down = document.getElementById('GFG_DOWN');

var names = document.getElementById('names');

 

var arr = [            "Sedef Ulusoy"

                ,"Mehmet Tuna"

                ,"Yasin Aydın"

                ,"Lokman Anık"

                ,"Ayhan Cesur"

                ,"İlkin Tokuş"

                ,"Rümeysa Bükecik"

                ,"Gülcan Ülke"

                ,"Merve Candemir"

                ,"Ramazan Kürkan"

                ,"Çağatay Şahin"];

               

var currentSpeaker="";

               

 

 

function random(mn, mx) {

return Math.random() * (mx - mn) + mn;

}

function randomWithMaxNumber(mx) {

return Math.floor(random(1,mx))-1;

}

 

function GFG_Fun() {

 

 

countDownDate = new Date().getTime()

 

var index=randomWithMaxNumber(arr.length);

if(index>-1){

currentSpeaker = arr[index];

arr.splice(index, 1)

 

 

}else{

currentSpeaker = "İYİ ÇALIŞMALAR!!!";

}

var audio = new Audio();

audio.src ='http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q='+ currentSpeaker + '&tl=tr';

audio.play();

ClearInterval(x);

}

 

document.getElementById('divCounter').addEventListener('click', GFG_Fun);

 

 

 

 

// Set the date we're counting down to

var countDownDate = new Date().getTime()

var DownCounterSeconds=90;

// Update the count down every 1 second

var x = setInterval(function() {

 

  // Get today's date and time

  var now = new Date().getTime();

   

  // Find the distance between now and the count down date

  var distance =  now-countDownDate;

   

  // Time calculations for days, hours, minutes and seconds

// var days = Math.floor(distance / (1000 * 60 * 60 * 24));

// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * DownCounterSeconds)) / 1000);

   

  // Output the result in an element with id="demo"

if(currentSpeaker != "")  down.innerHTML = currentSpeaker +" - "+ (DownCounterSeconds-seconds);

   

  // If the count down is over, write some text

 

  if (seconds==DownCounterSeconds-1) {

      GFG_Fun();

  }

}, 1000);