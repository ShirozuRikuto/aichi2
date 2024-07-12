'use strict';

let path = "./images";
const image_src = new Array(`${path}/001.jpg`,`${path}/002.jpg`,`${path}/003.jpg`,`${path}/004.jpg`,`${path}/005.jpg`);
let num = 0;

function slideAtTime(){
    if (num == 4) {
        num = 0;
    }
    else {
        num ++;
    }
    $("#sample-img").attr("src", image_src[num]);
    setTimeout("slideAtTime()", 5000)
}

slideAtTime();