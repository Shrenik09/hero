// window.onload=function() {
// 	alert("Page is loaded")
// }
// window.onbeforeunload=function(){
// 	console.log("Hey You are leaving");
// 	return("Hey, You are leaving");
// }
const a=1234;
if (a===1234) {
	var greet="Hello 1234";
}
console.log(greet),
console.log("First", name);
var name="Shrenik";
console.log("Second",name)
let namee="Shrenik"
function gret(){
 return console.log(`Hey this is ${namee}`)
}
gret()
let count=0;
let n=setInterval(function q(){
	console.log("Checking Something")
	count++
	if(count==3){
		clearInterval(n)
		console.log("This is the last one")
	}
},3000)