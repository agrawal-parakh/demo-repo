var i=0;
var timer=1000;
var images=["/images/hygeine.png","/images/affordable-price.jpeg","/images/logo.png","/images/payment.jpeg"];
function image_slider(){
    document.getElementById("slider").src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
setTimeout("image_slider()",timer);
}
window.onload=image_slider;