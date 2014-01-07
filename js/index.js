/* i-C-a */
var bhcreator = new Audio();
bhcreator.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/bhcreator.mp3";
bhcreator.addEventListener('ended', function() { bhcreator.play(); });

var whatamimp3 = new Audio();
whatamimp3.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/whatami.mp3";
whatamimp3.addEventListener('ended', function() { whatamimp3.play(); });

var mapmakerbg = new Audio();
mapmakerbg.src = "audio/mapmaker.mp3";
mapmakerbg.addEventListener('ended', function() { mapmakerbg.play(); });

var civscrambg = new Audio();
civscrambg.src = "audio/civilizationscramble.mp3";
civscrambg.addEventListener('ended', function() { civscrambg.play(); });

var animalsoundbg = new Audio();
animalsoundbg.src = "audio/animals.mp3";
animalsoundbg.addEventListener('ended', function() { animalsoundbg.play(); });

var artmusicsoundbg = new Audio();
artmusicsoundbg.src = "audio/artmusic.mp3";
artmusicsoundbg.addEventListener('ended', function() { artmusicsoundbg.play(); });

var humanbodysoundbg = new Audio();
humanbodysoundbg.src = "audio/humanbody.mp3";
humanbodysoundbg.addEventListener('ended', function() { humanbodysoundbg.play(); });

var langcultsoundbg = new Audio();
langcultsoundbg.src = "audio/langcult.mp3";
langcultsoundbg.addEventListener('ended', function() { langcultsoundbg.play(); });

var modernsoundbg = new Audio();
modernsoundbg.src = "audio/modern.mp3";
modernsoundbg.addEventListener('ended', function() { modernsoundbg.play(); });

var naturalsoundbg = new Audio();
naturalsoundbg.src = "audio/natural.mp3";
naturalsoundbg.addEventListener('ended', function() { naturalsoundbg.play(); });

var peopleplacessoundbg = new Audio();
peopleplacessoundbg.src = "audio/peopleplaces.mp3";
peopleplacessoundbg.addEventListener('ended', function() { peopleplacessoundbg.play(); });

var sciencesoundbg = new Audio();
sciencesoundbg.src = "audio/science.mp3";
sciencesoundbg.addEventListener('ended', function() { sciencesoundbg.play(); });

var ancientsoundbg = new Audio();
ancientsoundbg.src = "audio/ancientcivbg.mp3";
ancientsoundbg.addEventListener('ended', function() { ancientsoundbg.play(); });

var agsoundbg = new Audio();
agsoundbg.src = "audio/ancientgreece.mp3";
agsoundbg.addEventListener('ended', function() { agsoundbg.play(); });

var spacesoundbg = new Audio();
spacesoundbg.src = "audio/space.mp3";
spacesoundbg.addEventListener('ended', function() { spacesoundbg.play(); });

var bgsoundbh = new Audio();
bgsoundbh.src = "audio/blackhole.mp3";
bgsoundbh.addEventListener('ended', function() { bgsoundbh.play(); });

var mainaudiobg = new Audio();
mainaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/mainbg.mp3";
mainaudiobg.addEventListener('ended', function() { mainaudiobg.play(); });

var mainaudiosea = new Audio();
mainaudiosea.src = "audio/backgroundsea.mp3";
mainaudiosea.addEventListener('ended', function() { mainaudiosea.play(); });

/*var naturalsoundsea = new Audio();
naturalsoundsea.src = "audio/natural.mp3";
naturalsoundsea.addEventListener('ended', function() { naturalsoundbg.play(); });*/

var iliadaudiobg = new Audio();
iliadaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/Hector_vs_Achilles.mp3";

var theseusaudiobg = new Audio();
theseusaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/Theseus_and_the_Minotaur.mp3";

var odysseyaudiobg = new Audio();
odysseyaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/Odyssey.mp3";

var olympicsaudiobg = new Audio();
olympicsaudiobg.src = "http://back.uvmate.com/sites/default/files/subjectsaudio/Olympics.mp3";

function pausesea() { bssoundbg.pause() }
function playsea() { bssoundbg.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

function pauseagbg() { 
  //agsoundbg.volume = 0.1;
  agsoundbg.pause();
}
function playagbg() { 
  //agsoundbg.volume = 1.0; 
  agsoundbg.play();
  $(".audiopanel").css({"backgroundPosition":"0px 0px"}); 
}

function pausebh() { bgsoundbh.pause() }
function playbh() { bgsoundbh.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

function startolympicsaudiobg() {
  olympicsaudiobg.play();
  olympicsaudiobg.pause();
  setTimeout(function(){ olympicsaudiobg.play();}, 2000);
}

function startodysseyaudiobg() {
  odysseyaudiobg.play();
  odysseyaudiobg.pause();
  setTimeout(function(){ odysseyaudiobg.play();}, 2000);
}

function starttheseusaudiobg() {
  theseusaudiobg.play();
  theseusaudiobg.pause();
  setTimeout(function(){ theseusaudiobg.play();}, 2000);
}

function startiliadaudiobg() {
  iliadaudiobg.play();
  iliadaudiobg.pause();
  setTimeout(function(){ iliadaudiobg.play();}, 2000);
} 

var animateAGS = true;

function jAnimate(divIdAnimate) {
  var frameWidth = 340;
  var frameHeight = 145;
  var spriteWidth = 4080;
  var spriteHeight = 145;
  var curxPx = 0;
  var ti;
  var animateObject = divIdAnimate;
  var spriteElement = document.getElementById(animateObject);
  
  function animateSprite() {
      spriteElement.style.backgroundPosition = '-' + curxPx + 'px 0px';
      curxPx = curxPx + frameWidth;
      if (curxPx >= spriteWidth) { curxPx = 0; }
      if(animateAGS) { ti = setTimeout(animateSprite, 160); }
   }
   
   animateSprite();  
}

$('#mov').live( 'pageshow',function(event, ui){ });

$('#gilgamesh').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#gilgamesh').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#gilgamesh2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#gilgamesh2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#babylonians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#babylonians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#babylonians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#babylonians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#phoenicians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#phoenicians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#phoenicians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#phoenicians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#egyptians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#egyptians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#egyptians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#egyptians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#xenophon').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#xenophon').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#xenophon2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#xenophon2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#persians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#persians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#persians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#persians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#romans').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#romans').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#romans2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#romans2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#legacyofgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#legacyofgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#legacyofgreece2-2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#legacyofgreece2-2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#tribesofgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#tribesofgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#tribesofgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#tribesofgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#odyssey').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#odyssey').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#odyssey2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#odyssey2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#templesofgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#templesofgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#templesofgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#templesofgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#spartans').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#spartans').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#spartans2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#spartans2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#storytelling').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#storytelling').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#storytelling2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#storytelling2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#legacyofgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#legacyofgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#legacyofgreece-2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#legacyofgreece-2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agintro').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agintro').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agintro2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agintro2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#ancientgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#ancientgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#ancientgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#ancientgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agora').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agora').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agora2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agora2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agschool').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agschool').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#agschool2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#agschool2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#aroundag').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#aroundag2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#aroundag2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#hittites').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#hittites').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#hittites2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#hittites2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#kinghatpray').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#kinghatpray').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#kinghatpray2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#kinghatpray2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lifeinag').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lifeinag').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lifeinag2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lifeinag2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lydians').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lydians').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lydians2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lydians2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lydiansmoney').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lydiansmoney').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#lydiansmoney2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#lydiansmoney2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#minoans').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#minoans').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#minoans2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#minoans2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#minoansend').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#minoansend').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#minoansend2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#minoansend2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#mycenaeans').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#mycenaeans').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#mycenaeans2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#mycenaeans2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#olympics').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#olympics').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#olympics2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#olympics2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#panathenai').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#panathenai').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#panathenai2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#panathenai2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#originsofgreece').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#originsofgreece').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#originsofgreece2').live( 'pageshow',function(event, ui){
    animateAGS =  true;
    jAnimate("animatedsoldier");
});

$('#originsofgreece2').live( 'pagehide',function(event, ui){
    animateAGS =  false;
});

$('#ancientgreece').live( 'pagehide',function(event, ui){
  animateAGS =  false;
});



/************************ Luminous Light Section *******************************/
var bgsoundluminous = new Audio();
bgsoundluminous.src = "audio/Liminous_Light/luminouslight_bg.mp3";
bgsoundluminous.addEventListener('ended', function() { bgsoundluminous.play(); });

function pauseluminous() { bgsoundluminous.pause() }
function playluminous() { bgsoundluminous.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Sleep And Dreams Section *******************************/
var bgsoundsleeps = new Audio();
bgsoundsleeps.src = "audio/Sleeps_And_Dreams/sleeps_bg.mp3";
bgsoundsleeps.addEventListener('ended', function() { bgsoundsleeps.play(); });

function pausesleeps() { bgsoundsleeps.pause() }
function playsleeps() { bgsoundsleeps.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ How to Become A Scientist Section *******************************/

var bgsoundscientist = new Audio();
bgsoundscientist.src = "audio/Liminous_Light/luminouslight_bg.mp3";
bgsoundscientist.addEventListener('ended', function() { bgsoundscientist.play(); });

function pausescientist() { bgsoundscientist.pause() }
function playscientist() { bgsoundscientist.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Extreme Weather Section *******************************/

var bgsoundweather = new Audio();
bgsoundweather.src = "audio/Extreme_Weather/weather_bg.mp3";
bgsoundweather.addEventListener('ended', function() { bgsoundweather.play(); });

function pauseweather() { bgsoundweather.pause() }
function playsweather() { bgsoundweather.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Deep Blue Section *******************************/
var bgsoundbluesea = new Audio();
bgsoundbluesea.src = "audio/The_Deep_Blue_Sea/backgroundsea.mp3";
bgsoundbluesea.addEventListener('ended', function() { bgsoundbluesea.play(); });

function pausebluesea() { bgsoundbluesea.pause() }
function playbluesea() { bgsoundbluesea.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Super Fast Trains Section *******************************/
var bgsoundsuperfasttrains = new Audio();
bgsoundsuperfasttrains.src = "audio/Super_Fast_Trains/super_fast_trains_bg.mp3";
bgsoundsuperfasttrains.addEventListener('ended', function() { bgsoundsuperfasttrains.play(); });

function pausetrains() { bgsoundsuperfasttrains.pause() }
function playstrains() { bgsoundsuperfasttrains.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }


/************************ Build your Own Skelton *******************************/
var bgsoundskelton = new Audio();
bgsoundskelton.src = "audio/Build_Your_Own_Skelton/build_your_own_skelton_bg.mp3";
bgsoundskelton.addEventListener('ended', function() { bgsoundskelton.play(); });

function pauseskelton() { bgsoundskelton.pause() }
function playsskelton() { bgsoundskelton.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Reality TV *******************************/
var bgsoundrealityTV = new Audio();
bgsoundrealityTV.src = "audio/Reality_TV/Reality_TV_BG.mp3";
bgsoundrealityTV.addEventListener('ended', function() { bgsoundrealityTV.play(); });

function pauseRealityTV() { bgsoundrealityTV.pause() }
function playsRealityTV() { bgsoundrealityTV.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }


/************************ Money *******************************/
var bgsoundmoney = new Audio();
bgsoundmoney.src = "audio/Reality_TV/Reality_TV_BG.mp3";
bgsoundmoney.addEventListener('ended', function() { bgsoundmoney.play(); });

function pauseMoney() { bgsoundmoney.pause() }
function playsMoney() { bgsoundmoney.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }


/************************ Life and how it works *******************************/
var bgsoundhowlifeworks = new Audio();
//Background sound not available
bgsoundhowlifeworks.src = "audio/Life_And_How_It_Works/Life_And_How_It_Works_audio_not_available.mp3";
bgsoundhowlifeworks.addEventListener('ended', function() { bgsoundhowlifeworks.play(); });

function pausehowlifeworks() { bgsoundhowlifeworks.pause() }
function playshowlifeworks() { bghowlifeworks.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Parks In Peril *******************************/
var bgsoundParksInPeril = new Audio();
bgsoundParksInPeril.src = "audio/Parks_In_Peril/Parks_In_Peril_BG.mp3";
bgsoundParksInPeril.addEventListener('ended', function() { bgsoundParksInPeril.play(); });

function pauseParksInPeril() { bgsoundParksInPeril.pause() }
function playsParksInPeril() { bgsoundParksInPeril.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Comets, Asteroids and meteors *******************************/
var bgsoundcometsasteroidsmeteors = new Audio();
bgsoundcometsasteroidsmeteors.src = "audio/Commets_Asteroids_Meteors/Commets_Asteroids_Meteors_BG.mp3";
bgsoundcometsasteroidsmeteors.addEventListener('ended', function() { bgsoundcometsasteroidsmeteors.play(); });

function pausecometsasteroidsmeteors() { bgsoundcometsasteroidsmeteors.pause() }
function playscometsasteroidsmeteors() { bgsoundcometsasteroidsmeteors.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Fang... How Animals Eat *******************************/
var bgsoundFangAnimals = new Audio();
bgsoundFangAnimals.src = "audio/Fang_How_Animals_Eat/Fang-How-Animals-Eat-BG.mp3";
bgsoundFangAnimals.addEventListener('ended', function() { bgsoundFangAnimals.play(); });

function pauseFangAnimals() { bgsoundFangAnimals.pause() }
function playsFangAnimals() { bgsoundFangAnimals.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Changing Places *******************************/
var bgsoundChangingPlaces = new Audio();
bgsoundChangingPlaces.src = "audio/Changing_Places/Changing_Places_BG.mp3";
bgsoundChangingPlaces.addEventListener('ended', function() { bgsoundChangingPlaces.play(); });

function pauseChangingPlaces() { bgsoundChangingPlaces.pause() }
function playsChangingPlaces() { bgsoundChangingPlaces.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ People In Space *******************************/
var bgsoundPeopleInSpace = new Audio();
bgsoundPeopleInSpace.src = "audio/People_In_Space/People_In_Space_BG.mp3";
bgsoundPeopleInSpace.addEventListener('ended', function() { bgsoundPeopleInSpace.play(); });

function pausePeopleInSpace() { bgsoundPeopleInSpace.pause() }
function playsPeopleInSpace() { bgsoundPeopleInSpace.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }


/************************ Ever Changing Earth *******************************/
var bgsoundeverchangingearth = new Audio();
bgsoundeverchangingearth.src = "audio/Ever_Changing_Earth/Ever_Changing_Earth_BG.mp3";
bgsoundeverchangingearth.addEventListener('ended', function() { bgsoundeverchangingearth.play(); });

function pauseeverchangingearth() { bgsoundeverchangingearth.pause() }
function playseverchangingearth() { bgsoundeverchangingearth.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Manga *******************************/
var bgsoundManga = new Audio();
bgsoundManga.src = "audio/Manga/Manga_BG.mp3";
bgsoundManga.addEventListener('ended', function() { bgsoundManga.play(); });

function pauseManga() { bgsoundManga.pause() }
function playsManga() { bgsoundManga.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }

/************************ Asia Today *******************************/
var bgsoundAsiaToday = new Audio();
bgsoundAsiaToday.src = "audio/Asia_Today/Asia_Today_BG.mp3";
bgsoundAsiaToday.addEventListener('ended', function() { bgsoundAsiaToday.play(); });

function pauseAsiaToday() { bgsoundAsiaToday.pause() }
function playsAsiaToday() { bgsoundAsiaToday.play(); $(".audiopanel").css({"backgroundPosition":"0px 0px"}); }