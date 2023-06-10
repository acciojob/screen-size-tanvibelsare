//your JS code here. If required.
function getSize(){
let size=document.getElementById("sizeInfo");
let x=window.innerWidth;
let y=window.innerHeight;
size.innerHTML=`
<h1>Width:${x}   and Height: ${y}  </h1>
	`
}