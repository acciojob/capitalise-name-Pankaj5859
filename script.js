//your JS code here. If required.
let ip=document.getElementById("frame")


ip.addEventListner("blur",()=>{
	ip.value=ip.toUpperCase();
})