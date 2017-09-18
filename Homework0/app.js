window.onload = initAll;

function initAll() {
document.getElementById("nickName").onclick = function() {
    document.getElementById("msgField").innerHTML = getNickName();
    return false;
}
}

function getNickName() {
var firstName = ["Fat", "Amazing", "Hairy", "Slow", "Horned",
"Water","Traitor", "Intimidating", "American", "Shaggy", "Lazy", "Hairless",
"Strong", "Focused", "Distant", "Hooved", "Hefty", "Tiny", "Large",
"Fantastic", "Red", "Brown", "Crazy", "Prideful", "Awkward", "Odd"];


var lastName1 = ["Buffalo", "Bison", "Gross", "Bubble", "Teacher",
 "Hobo", "Toilet", "Turd", "Face", "Dip", "Nose", "Brain", "Head", 
 "Breath", "Pants", "Shorts", "Lips", "Mouth", "Muffin", "Brains", "Wit",
 "Juice", "Shower", "Toes", "Buns", "Spew", "Farts", "Buckie", "Football", "VolleyBall", "Racecar"];


var firstNm = document.getElementById("fName").value.toUpperCase();
var firstLs = firstNm.length;



var validName = true;

while(firstLs > 30){
    firstLs = firstLs - 30;
}

while(firstNm > 26){
    firstNm = firstNm - 26;
}


var firstNum = firstNm.charCodeAt(0) ;

while(firstNum > 26){
    firstNum -=26;
}



return "Your buff name is " + firstName[firstNum] + " " + lastName1[firstLs];

}