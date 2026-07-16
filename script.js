const PLAYSTORE =
"https://play.google.com/store/apps/details?id=id.primecare.primeplus";

const APPSTORE = 
  "https://apps.apple.com/id/app/primeplus/id6785361573";

const playBtn=document.getElementById("playBtn");
const iosBtn=document.getElementById("iosBtn");
const info=document.getElementById("info");

playBtn.href=PLAYSTORE;

if(APPSTORE===""){

iosBtn.href="#";

iosBtn.onclick=function(e){

e.preventDefault();

alert("Versi iOS akan segera hadir.");

};

}else{

iosBtn.href=APPSTORE;

}

